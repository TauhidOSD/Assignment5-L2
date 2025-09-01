"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../user/user.model");
const protect = () => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({ message: "Not authorized, no token" });
            }
            const token = authHeader.split(" ")[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            // find the user
            const user = await user_model_1.User.findById(decoded.id).select("-password");
            if (!user) {
                return res.status(401).json({ message: "User not found" });
            }
            req.user = user; //  attach the user on request 
            next();
        }
        catch (error) {
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    };
};
exports.protect = protect;
//# sourceMappingURL=auth.js.map