import { Request, Response } from "express";

export default function errorHandler(error:any, req: Request, res: Response) {
  console.error(error);
  res.status(500).json({ message:error.message });
}