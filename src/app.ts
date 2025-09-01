import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/auth.route";
import userRoutes from "./modules/user/user.route";
import driverRoutes from "./modules/driver/driver.route";
import rideRoutes from "./modules/ride/ride.route"
import { errorHandler } from "./middlewares/errorHandler";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/rides", rideRoutes);


app.use(errorHandler);

export default app;
