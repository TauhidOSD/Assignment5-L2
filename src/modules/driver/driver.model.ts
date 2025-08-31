import mongoose, { Schema, Document } from "mongoose";

export interface IDriver extends Document {
  user: mongoose.Types.ObjectId; 
  isApproved: boolean;
  isAvailable: boolean;
  earnings: number;
}

const driverSchema = new Schema<IDriver>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isApproved: { type: Boolean, default: false },
    isAvailable: { type: Boolean, default: false },
    earnings: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Driver = mongoose.model<IDriver>("Driver", driverSchema);
