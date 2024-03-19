import { type HttpError } from "@refinedev/core";
type handleUnkownErrorParams = {
    error: unknown;
    errorWhile?: string;
};
export declare const handleUnkownError: (params: handleUnkownErrorParams) => Error | HttpError;
export {};
//# sourceMappingURL=handleUnknownError.d.ts.map