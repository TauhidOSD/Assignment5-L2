import { Request, Response } from "express";
import { Ride } from "./ride.model";

// Rider: request ride
export const requestRide = async (req: any, res: Response) => {
  try {
    const { pickup, destination } = req.body;
    const ride = await Ride.create({
      rider: req.user._id,
      pickup,
      destination,
    });
    res.status(201).json({ message: "Ride requested successfully", ride });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Rider: cancel ride
export const cancelRide = async (req: any, res: Response) => {
  try {
    const ride = await Ride.findOne({ _id: req.params.id, rider: req.user._id });
    if (!ride) return res.status(404).json({ message: "Ride not found" });
    if (ride.status !== "requested") {
      return res.status(400).json({ message: "Cannot cancel after driver accepts" });
    }
    ride.status = "cancelled";
    await ride.save();
    res.json({ message: "Ride cancelled successfully", ride });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Driver: accept ride
export const acceptRide = async (req: any, res: Response) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) return res.status(404).json({ message: "Ride not found" });
    if (ride.status !== "requested") {
      return res.status(400).json({ message: "Ride is not available to accept" });
    }
    ride.driver = req.user._id;
    ride.status = "accepted";
    await ride.save();
    res.json({ message: "Ride accepted successfully", ride });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Driver: update ride status
export const updateRideStatus = async (req: any, res: Response) => {
  try {
    const { status } = req.body;
    const ride = await Ride.findOne({ _id: req.params.id, driver: req.user._id });
    if (!ride) return res.status(404).json({ message: "Ride not found" });

    ride.status = status;
    await ride.save();
    res.json({ message: "Ride status updated", ride });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Rider/Driver: view ride history
export const getMyRides = async (req: any, res: Response) => {
  try {
    const query = req.user.role === "rider" ? { rider: req.user._id } : { driver: req.user._id };
    const rides = await Ride.find(query).sort({ createdAt: -1 });
    res.json({ rides });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin: view all rides
export const getAllRides = async (req: Request, res: Response) => {
  try {
    const rides = await Ride.find().populate("rider driver", "name email role");
    res.json({ rides });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
