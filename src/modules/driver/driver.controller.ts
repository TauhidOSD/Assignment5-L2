import { Request, Response } from "express";
import { User } from "../user/user.model";

// Admin: approve driver
export const approveDriver = async (req: Request, res: Response) => {
  try {
    const driver = await User.findOne({ _id: req.params.id, role: "driver" });
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    driver.isApproved = true;
    await driver.save();

    res.json({ message: "Driver approved successfully", driver });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: suspend driver
export const suspendDriver = async (req: Request, res: Response) => {
  try {
    const driver = await User.findOne({ _id: req.params.id, role: "driver" });
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    driver.isApproved = false;
    await driver.save();

    res.json({ message: "Driver suspended successfully", driver });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Driver: update availability
export const setAvailability = async (req: Request, res: Response) => {
  try {
    const driver = await User.findOne({ _id: (req as any).user.id, role: "driver" });
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    // Add isAvailable field if doesn't exist
    if (driver.isAvailable === undefined) driver.isAvailable = false;

    driver.isAvailable = !driver.isAvailable;
    await driver.save();

    res.json({ message: `Driver is now ${driver.isAvailable ? "Online" : "Offline"}` });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Driver: get earnings
export const getEarnings = async (req: Request, res: Response) => {
  try {
    const driver = await User.findOne({ _id: (req as any).user.id, role: "driver" });
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    // Add earnings field if doesn't exist
    if (driver.earnings === undefined) driver.earnings = 0;

    res.json({ earnings: driver.earnings });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
