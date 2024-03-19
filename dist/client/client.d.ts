import { type AxiosInstance, type CreateAxiosDefaults } from "axios";
export interface ClientParams {
    url: string;
    axiosConfig?: Partial<CreateAxiosDefaults>;
}
export declare class Client {
    url: string;
    instance: AxiosInstance;
    constructor(params: ClientParams);
}
//# sourceMappingURL=client.d.ts.map