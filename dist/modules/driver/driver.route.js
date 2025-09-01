"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const driver_controller_1 = require("./driver.controller");
const role_1 = require("../../middlewares/role");
const auth_1 = require("../auth/auth");
const router = express_1.default.Router();
// Admin routes
router.patch("/approve/:id", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("admin"), driver_controller_1.approveDriver);
router.patch("/suspend/:id", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("admin"), driver_controller_1.suspendDriver);
// Driver routes
router.patch("/availability", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("driver"), driver_controller_1.setAvailability);
router.get("/earnings", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("driver"), driver_controller_1.getEarnings);
exports.default = router;
//# sourceMappingURL=driver.route.js.map