"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const driver_route_1 = __importDefault(require("./modules/driver/driver.route"));
const ride_route_1 = __importDefault(require("./modules/ride/ride.route"));
const errorHandler_1 = require("./middlewares/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/auth", auth_route_1.default);
app.use("/api/users", user_route_1.default);
app.use("/api/drivers", driver_route_1.default);
app.use("/api/rides", ride_route_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map