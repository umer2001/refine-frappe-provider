import { type CanParams, type CanReturnType, type AccessControlProvider, type IAccessControlContext } from "@refinedev/core";
import { Client, ClientParams } from "@/client";
export type AccessControlParams = ClientParams;
export type AccessControlProviderParams = Pick<IAccessControlContext, "options">;
declare class AccessControlClient extends Client {
    provider(props?: AccessControlProviderParams): AccessControlProvider;
    can: (params: CanParams) => Promise<CanReturnType>;
}
export default AccessControlClient;
//# sourceMappingURL=accessControlClient.d.ts.map