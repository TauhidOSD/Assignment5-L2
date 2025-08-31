import { Request, Response } from "express";
import { Driver } from "./driver.model";

// Admin: approve driver
export const approveDriver = async (req: Request, res: Response) => {
  try {
    const driver = await Driver.findById(req.params.id);
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
    const driver = await Driver.findById(req.params.id);
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
    const driver = await Driver.findOne({  user: (req as any).user.id});
    if (!driver) return res.status(404).json({ message: "Driver not found" });

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
    const driver = await Driver.findOne({  user: (req as any).user.id });
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    res.json({ earnings: driver.earnings });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
