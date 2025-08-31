import express from "express";
import { approveDriver, suspendDriver, setAvailability, getEarnings } from "./driver.controller";
import { authorizeRoles } from "../../middlewares/role";
import { protect } from "../auth/auth";

const router = express.Router();

// Admin routes
router.patch("/approve/:id", protect(), authorizeRoles("admin"), approveDriver);
router.patch("/suspend/:id", protect(), authorizeRoles("admin"), suspendDriver);

// Driver routes
router.patch("/availability", protect(), authorizeRoles("driver"), setAvailability);
router.get("/earnings", protect(), authorizeRoles("driver"), getEarnings);

export default router;
