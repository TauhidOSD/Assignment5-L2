"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEarnings = exports.setAvailability = exports.suspendDriver = exports.approveDriver = void 0;
const user_model_1 = require("../user/user.model");
// Admin: approve driver
const approveDriver = async (req, res) => {
    try {
        const driver = await user_model_1.User.findOne({ _id: req.params.id, role: "driver" });
        if (!driver)
            return res.status(404).json({ message: "Driver not found" });
        driver.isApproved = true;
        await driver.save();
        res.json({ message: "Driver approved successfully", driver });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.approveDriver = approveDriver;
// Admin: suspend driver
const suspendDriver = async (req, res) => {
    try {
        const driver = await user_model_1.User.findOne({ _id: req.params.id, role: "driver" });
        if (!driver)
            return res.status(404).json({ message: "Driver not found" });
        driver.isApproved = false;
        await driver.save();
        res.json({ message: "Driver suspended successfully", driver });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.suspendDriver = suspendDriver;
// Driver: update availability
const setAvailability = async (req, res) => {
    try {
        const driver = await user_model_1.User.findOne({ _id: req.user.id, role: "driver" });
        if (!driver)
            return res.status(404).json({ message: "Driver not found" });
        // Add isAvailable field if doesn't exist
        if (driver.isAvailable === undefined)
            driver.isAvailable = false;
        driver.isAvailable = !driver.isAvailable;
        await driver.save();
        res.json({ message: `Driver is now ${driver.isAvailable ? "Online" : "Offline"}` });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.setAvailability = setAvailability;
// Driver: get earnings
const getEarnings = async (req, res) => {
    try {
        const driver = await user_model_1.User.findOne({ _id: req.user.id, role: "driver" });
        if (!driver)
            return res.status(404).json({ message: "Driver not found" });
        // Add earnings field if doesn't exist
        if (driver.earnings === undefined)
            driver.earnings = 0;
        res.json({ earnings: driver.earnings });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getEarnings = getEarnings;
//# sourceMappingURL=driver.controller.js.map