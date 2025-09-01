"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../modules/user/user.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const seedAdmin = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log("MongoDB connected ✅");
        const adminExists = await user_model_1.User.findOne({ email: "admin@example.com" });
        if (adminExists) {
            console.log("Admin already exists");
            process.exit(0);
        }
        const hashedPassword = await bcrypt_1.default.hash("123456", 10);
        await user_model_1.User.create({
            name: "Super Admin",
            email: "admin@example.com",
            password: hashedPassword,
            role: "admin",
        });
        console.log("Admin created: email=admin@example.com, password=123456");
        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
seedAdmin();
//# sourceMappingURL=seedAdmin.js.map