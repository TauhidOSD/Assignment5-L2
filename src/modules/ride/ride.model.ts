import mongoose, { Schema, Document } from "mongoose";

export interface IRide extends Document {
  rider: mongoose.Schema.Types.ObjectId;
  driver?: mongoose.Schema.Types.ObjectId;
  pickup: string;
  destination: string;
  status: "requested" | "accepted" | "picked_up" | "in_transit" | "completed" | "cancelled";
  fare?: number;
  createdAt: Date;
  updatedAt: Date;
}

const rideSchema = new Schema<IRide>(
  {
    rider: { type: Schema.Types.ObjectId, ref: "User", required: true },
    driver: { type: Schema.Types.ObjectId, ref: "User" },
    pickup: { type: String, required: true },
    destination: { type: String, required: true },
    status: {
      type: String,
      enum: ["requested", "accepted", "picked_up", "in_transit", "completed", "cancelled"],
      default: "requested",
    },
    fare: { type: Number },
  },
  { timestamps: true }
);

export const Ride = mongoose.model<IRide>("Ride", rideSchema);
