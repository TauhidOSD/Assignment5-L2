import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../user/user.model";


interface DecodedToken {
  id: string;
  role: string;
}

export const protect = () => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized, no token" });
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

      // find the user
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      req.user = user; //  attach the user on request 
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  };
};
