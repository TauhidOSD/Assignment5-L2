"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../../utils/generateToken");
const user_model_1 = require("../user/user.model");
const registerUser = async (data) => {
    const { name, email, password, role } = data;
    const userExists = await user_model_1.User.findOne({ email });
    if (userExists)
        throw new Error("User already exists");
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await user_model_1.User.create({ name, email, password: hashedPassword, role });
    const token = (0, generateToken_1.generateToken)(user._id.toString(), user.role);
    return { user, token };
};
exports.registerUser = registerUser;
const loginUser = async (data) => {
    const { email, password } = data;
    const user = await user_model_1.User.findOne({ email });
    if (!user)
        throw new Error("User not found");
    const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordCorrect)
        throw new Error("Invalid credentials");
    const token = (0, generateToken_1.generateToken)(user._id.toString(), user.role);
    return { user, token };
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map