"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error("Error :", err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};
exports.errorHandler = errorHandler;
// import { Request, Response } from "express";
// export default function errorHandler(error:any, req: Request, res: Response) {
//   console.error(error);
//   res.status(500).json({ message:error.message });
// }
//# sourceMappingURL=errorHandler.js.map