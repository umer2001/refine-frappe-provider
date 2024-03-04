import {
  type DataProvider,
  type BaseRecord,
  type GetListParams,
  type GetListResponse,
  type GetManyParams,
  type GetManyResponse,
  type CreateParams,
  type CreateResponse,
  type UpdateParams,
  type UpdateResponse,
  type GetOneParams,
  type GetOneResponse,
  type DeleteOneParams,
  type DeleteOneResponse,
  type CustomParams,
  type CustomResponse,
} from "@refinedev/core";

import { Client, ClientParams } from "@/client";

import {
  Doc,
} from "./dataTypes";
import {
  generateFilter,
  generatePagination,
  generateSort,
} from "./utils";

export type DataParams = ClientParams;

class DataClient extends Client {
  provider(): DataProvider {
    return {
      create: this.create.bind(this),
      custom: this.custom.bind(this),
      deleteOne: this.deleteOne.bind(this),
      getApiUrl: this.getApiUrl.bind(this),
      getList: this.getList.bind(this),
      getMany: this.getMany.bind(this),
      getOne: this.getOne.bind(this),
      update: this.update.bind(this),
    };
  }

  async getList<
    TData extends BaseRecord = BaseRecord,
  >(
    params: GetListParams,
  ): Promise<GetListResponse<TData>> {
    const {
      filters,
      meta,
      pagination,
      resource,
      sorters,
    } = params;

    const fpFilters = generateFilter(filters);
    const fpPagination = generatePagination(pagination);
    const fpSorter = generateSort(sorters);

    const { data } = await this.instance.request<TData[]>({
      method: "GET",
      params: {
        doctype: resource,
        fields: JSON.stringify(meta?.fields || ["name"]),
        filters: JSON.stringify(fpFilters),
        limit: fpPagination.limit_page_length,
        limit_start: fpPagination.limit_page_start,
        order_by: fpSorter,
      },
      url: "/api/method/frappe.client.get_list",
    });
    const { data: total } = await this.instance.request<number>({
      method: "GET",
      params: {
        doctype: resource,
        filters: JSON.stringify(fpFilters),
      },
      url: "/api/method/frappe.desk.reportview.get_count",
    });

    return {
      data,
      total,
    };
  }

  async getMany<
    TData extends BaseRecord = BaseRecord,
  >(
    params: GetManyParams,
  ): Promise<GetManyResponse<TData>> {
    const { ids, meta, resource } = params;

    const { data } = await this.instance.request<TData[]>({
      method: "GET",
      params: {
        doctype: resource,
        fields: JSON.stringify(meta?.fields || ["name"]),
        filters: JSON.stringify([["name", "in", ids]]),
      },
      url: "/api/method/frappe.client.get_list",
    });

    return { data };
  }

  async create<
    TData extends BaseRecord = BaseRecord,
    TVariables = Partial<TData>,
  >(
    params: CreateParams<TVariables>,
  ): Promise<CreateResponse<Doc<TData>>> {
    const { resource, variables } = params;

    const { data } = await this.instance.request<Doc<TData>>({
      data: variables,
      method: "POST",
      url: `/api/resource/${resource}`,
    });

    return { data };
  }

  async update<
    TData extends BaseRecord = BaseRecord,
    TVariables = Partial<TData>,
  >(
    params: UpdateParams<TVariables>,
  ): Promise<UpdateResponse<Doc<TData>>> {
    const { id, resource, variables } = params;

    const { data } = await this.instance.request<Doc<TData>>({
      data: variables,
      method: "PUT",
      url: `/api/resource/${resource}/${id}`,
    });

    return { data };
  }

  async getOne<
    TData extends BaseRecord = BaseRecord,
  >(
    params: GetOneParams,
  ): Promise<GetOneResponse<Doc<TData>>> {
    const { id, resource } = params;

    const { data } = await this.instance.request<Doc<TData>>({
      method: "GET",
      url: `/api/resource/${resource}/${id}`,
    });

    return { data };
  };

  async deleteOne<
    TData extends BaseRecord = BaseRecord,
    TVariables = object,
  >(
    params: DeleteOneParams<TVariables>,
  ): Promise<DeleteOneResponse<TData>> {
    const { id, resource } = params;

    await this.instance.request<"ok">({
      method: "DELETE",
      url: `/api/resource/${resource}/${id}`,
    });

    /**
     * Since Frappe only response with "ok" string,
     * we won't have full data of the deleted record.
     *
     * We will return the id of the deleted record instead.
     */

    return {
      data: {
        id,
      },
    } as DeleteOneResponse<TData>;
  }

  async custom<
    TData extends BaseRecord = BaseRecord,
    TQuery = unknown,
    TPayload = unknown,
  >(
    params: CustomParams<TQuery, TPayload>,
  ): Promise<CustomResponse<TData>> {
    const { method, payload, url } = params;

    const { data } = await this.instance.request({
      data: payload,
      method,
      url,
    });

    return { data };
  }

  getApiUrl(): string {
    return this.url;
  }
}

export default DataClient;
