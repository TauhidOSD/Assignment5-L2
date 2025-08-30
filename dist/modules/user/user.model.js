import mongoose, { Schema, Document } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "rider", "driver"], default: "rider" },
    isBlocked: { type: Boolean, default: false }
}, { timestamps: true });
export const User = mongoose.model("User", userSchema);
//# sourceMappingURL=user.model.js.map