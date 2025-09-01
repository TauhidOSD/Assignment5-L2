import { Request, Response } from "express";
export declare const requestRide: (req: any, res: Response) => Promise<void>;
export declare const cancelRide: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const acceptRide: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateRideStatus: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMyRides: (req: any, res: Response) => Promise<void>;
export declare const getAllRides: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=ride.controller.d.ts.map