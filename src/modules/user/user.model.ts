import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "rider" | "driver";
  isBlocked: boolean;
  isApproved?: boolean;     
  isAvailable?: boolean;    
  earnings?: number;        
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "rider", "driver"],
      required: true,
    },
    isBlocked: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    isAvailable: { type: Boolean, default: false },
    earnings: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
