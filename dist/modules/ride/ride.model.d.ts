import mongoose, { Document } from "mongoose";
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
export declare const Ride: mongoose.Model<IRide, {}, {}, {}, mongoose.Document<unknown, {}, IRide, {}, {}> & IRide & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=ride.model.d.ts.map