"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRides = exports.getMyRides = exports.updateRideStatus = exports.acceptRide = exports.cancelRide = exports.requestRide = void 0;
const ride_model_1 = require("./ride.model");
// Rider: request ride
const requestRide = async (req, res) => {
    try {
        const { pickup, destination } = req.body;
        const ride = await ride_model_1.Ride.create({
            rider: req.user._id,
            pickup,
            destination,
        });
        res.status(201).json({ message: "Ride requested successfully", ride });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.requestRide = requestRide;
// Rider: cancel ride
const cancelRide = async (req, res) => {
    try {
        const ride = await ride_model_1.Ride.findOne({ _id: req.params.id, rider: req.user._id });
        if (!ride)
            return res.status(404).json({ message: "Ride not found" });
        if (ride.status !== "requested") {
            return res.status(400).json({ message: "Cannot cancel after driver accepts" });
        }
        ride.status = "cancelled";
        await ride.save();
        res.json({ message: "Ride cancelled successfully", ride });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.cancelRide = cancelRide;
// Driver: accept ride
const acceptRide = async (req, res) => {
    try {
        const ride = await ride_model_1.Ride.findById(req.params.id);
        if (!ride)
            return res.status(404).json({ message: "Ride not found" });
        if (ride.status !== "requested") {
            return res.status(400).json({ message: "Ride is not available to accept" });
        }
        ride.driver = req.user._id;
        ride.status = "accepted";
        await ride.save();
        res.json({ message: "Ride accepted successfully", ride });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.acceptRide = acceptRide;
// Driver: update ride status
const updateRideStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const ride = await ride_model_1.Ride.findOne({ _id: req.params.id, driver: req.user._id });
        if (!ride)
            return res.status(404).json({ message: "Ride not found" });
        ride.status = status;
        await ride.save();
        res.json({ message: "Ride status updated", ride });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.updateRideStatus = updateRideStatus;
// Rider/Driver: view ride history
const getMyRides = async (req, res) => {
    try {
        const query = req.user.role === "rider" ? { rider: req.user._id } : { driver: req.user._id };
        const rides = await ride_model_1.Ride.find(query).sort({ createdAt: -1 });
        res.json({ rides });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.getMyRides = getMyRides;
// Admin: view all rides
const getAllRides = async (req, res) => {
    try {
        const rides = await ride_model_1.Ride.find().populate("rider driver", "name email role");
        res.json({ rides });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.getAllRides = getAllRides;
//# sourceMappingURL=ride.controller.js.map