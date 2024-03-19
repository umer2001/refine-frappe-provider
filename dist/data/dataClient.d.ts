import { type DataProvider, type BaseRecord, type GetListParams, type GetListResponse, type GetManyParams, type GetManyResponse, type CreateParams, type CreateResponse, type UpdateParams, type UpdateResponse, type GetOneParams, type GetOneResponse, type DeleteOneParams, type DeleteOneResponse, type CustomParams, type CustomResponse } from "@refinedev/core";
import { Client, ClientParams } from "@/client";
import { Doc } from "./dataTypes";
export type DataParams = ClientParams;
declare class DataClient extends Client {
    provider(): DataProvider;
    getList: <TData extends BaseRecord = BaseRecord>(params: GetListParams) => Promise<GetListResponse<TData>>;
    getMany: <TData extends BaseRecord = BaseRecord>(params: GetManyParams) => Promise<GetManyResponse<TData>>;
    create: <TData extends BaseRecord = BaseRecord, TVariables = Partial<TData>>(params: CreateParams<TVariables>) => Promise<CreateResponse<Doc<TData>>>;
    update: <TData extends BaseRecord = BaseRecord, TVariables = Partial<TData>>(params: UpdateParams<TVariables>) => Promise<UpdateResponse<Doc<TData>>>;
    getOne: <TData extends BaseRecord = BaseRecord>(params: GetOneParams) => Promise<GetOneResponse<Doc<TData>>>;
    deleteOne: <TData extends BaseRecord = BaseRecord, TVariables = object>(params: DeleteOneParams<TVariables>) => Promise<DeleteOneResponse<TData>>;
    custom: <TData extends BaseRecord = BaseRecord, TQuery = unknown, TPayload = unknown>(params: CustomParams<TQuery, TPayload>) => Promise<CustomResponse<TData>>;
    getApiUrl: () => string;
}
export default DataClient;
//# sourceMappingURL=dataClient.d.ts.map