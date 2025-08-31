import express from "express";
import { getAllUsers, getProfile, toggleBlockUser } from "./user.controller";
//import { protect } from "../../middlewares/auth";
import { authorizeRoles } from "../../middlewares/role";
import { protect } from "../auth/auth";

const router = express.Router();

// Admin: get all users
router.get("/", protect(), authorizeRoles("admin"), getAllUsers);

// Admin: block/unblock
router.patch("/block/:id", protect(), authorizeRoles("admin"), toggleBlockUser);

// Any user: get own profile
router.get("/me", protect(), getProfile);

export default router;
