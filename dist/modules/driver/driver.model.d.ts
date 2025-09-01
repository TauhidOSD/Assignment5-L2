import mongoose, { Document } from "mongoose";
export interface IDriver extends Document {
    user: mongoose.Types.ObjectId;
    isApproved: boolean;
    isAvailable: boolean;
    earnings: number;
}
export declare const Driver: mongoose.Model<IDriver, {}, {}, {}, mongoose.Document<unknown, {}, IDriver, {}, {}> & IDriver & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=driver.model.d.ts.map