"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_1 = require("../../middlewares/role");
const auth_1 = require("../auth/auth");
const ride_controller_1 = require("./ride.controller");
const router = express_1.default.Router();
// Rider
router.post("/request", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("rider"), ride_controller_1.requestRide);
router.patch("/cancel/:id", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("rider"), ride_controller_1.cancelRide);
router.get("/my-rides", (0, auth_1.protect)(), ride_controller_1.getMyRides);
// Driver
router.patch("/accept/:id", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("driver"), ride_controller_1.acceptRide);
router.patch("/status/:id", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("driver"), ride_controller_1.updateRideStatus);
// Admin
router.get("/", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("admin"), ride_controller_1.getAllRides);
exports.default = router;
//# sourceMappingURL=ride.route.js.map