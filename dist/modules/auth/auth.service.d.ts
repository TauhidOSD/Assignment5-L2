interface RegisterInput {
    name: string;
    email: string;
    password: string;
    role: string;
}
interface LoginInput {
    email: string;
    password: string;
}
export declare const registerUser: (data: RegisterInput) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../user/user.model").IUser, {}, {}> & import("../user/user.model").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    token: string;
}>;
export declare const loginUser: (data: LoginInput) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../user/user.model").IUser, {}, {}> & import("../user/user.model").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    token: string;
}>;
export {};
//# sourceMappingURL=auth.service.d.ts.map