import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler";
import authRoutes from "./modules/auth/auth.route";
import userRoutes from "./modules/user/user.route";
import driverRoutes from "./modules/driver/driver.route";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/drivers", driverRoutes);


app.use(errorHandler);

export default app;
