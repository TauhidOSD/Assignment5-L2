"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleBlockUser = exports.getProfile = exports.getAllUsers = void 0;
const user_model_1 = require("./user.model");
// Get all users (Admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await user_model_1.User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllUsers = getAllUsers;
// Get user profile (self)
const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await user_model_1.User.findById(userId);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getProfile = getProfile;
// Block / Unblock user (Admin only)
const toggleBlockUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await user_model_1.User.findById(userId);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        user.isBlocked = !user.isBlocked;
        await user.save();
        res.json({ message: `User is now ${user.isBlocked ? "blocked" : "unblocked"}` });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.toggleBlockUser = toggleBlockUser;
//# sourceMappingURL=user.controller.js.map