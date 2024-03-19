import { type AuthProvider } from "@refinedev/core";
import { Client, ClientParams } from "@/client";
import { AuthActionResponse, LoginParams, LogoutParams, CheckParams, CheckResponse, OnErrorResponse } from "./authType";
export type AuthParams = ClientParams;
declare class AuthClient extends Client {
    provider(): AuthProvider;
    login: (params: LoginParams) => Promise<AuthActionResponse>;
    logout: (params: LogoutParams) => Promise<AuthActionResponse>;
    check: (params?: CheckParams) => Promise<CheckResponse>;
    onError: (error: unknown) => Promise<OnErrorResponse>;
}
export default AuthClient;
//# sourceMappingURL=authClient.d.ts.map