import { Response, NextFunction } from "express";
export declare const authorizeRoles: (...roles: string[]) => (req: any, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=role.d.ts.map