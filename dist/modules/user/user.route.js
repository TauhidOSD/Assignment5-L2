"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
//import { protect } from "../../middlewares/auth";
const role_1 = require("../../middlewares/role");
const auth_1 = require("../auth/auth");
const router = express_1.default.Router();
// Admin: get all users
router.get("/", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("admin"), user_controller_1.getAllUsers);
// Admin: block/unblock
router.patch("/block/:id", (0, auth_1.protect)(), (0, role_1.authorizeRoles)("admin"), user_controller_1.toggleBlockUser);
// Any user: get own profile
router.get("/me", (0, auth_1.protect)(), user_controller_1.getProfile);
exports.default = router;
//# sourceMappingURL=user.route.js.map