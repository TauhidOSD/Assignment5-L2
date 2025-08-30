
// import bcrypt from "bcrypt";
// //import { User } from "../user/user.model";
// //import  generateToken from "../../utils/generateToken.js";
// import generateToken from "../../utils/generateToken.js";
// import { User } from "../user/user.model.js";
// import type { Request, Response } from "express";

// export const register = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword, role });

//     res.status(201).json({ message: "User registered", user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) return res.status(401).json({ message: "Invalid credentials" });

//     const token = generateToken(user._id, user.role);
//     res.json({ token, role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };
