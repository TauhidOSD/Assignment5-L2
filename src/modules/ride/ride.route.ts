import express from "express";
import { authorizeRoles } from "../../middlewares/role";
import { protect } from "../auth/auth";
import {
  requestRide,
  cancelRide,
  acceptRide,
  updateRideStatus,
  getMyRides,
  getAllRides,
} from "./ride.controller";


const router = express.Router();

// Rider
router.post("/request", protect(), authorizeRoles("rider"), requestRide);
router.patch("/cancel/:id", protect(), authorizeRoles("rider"), cancelRide);
router.get("/my-rides", protect(), getMyRides);

// Driver
router.patch("/accept/:id", protect(), authorizeRoles("driver"), acceptRide);
router.patch("/status/:id", protect(), authorizeRoles("driver"), updateRideStatus);

// Admin
router.get("/", protect(), authorizeRoles("admin"), getAllRides);

export default router;
