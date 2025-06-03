/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosRequestConfig } from "axios";

import { getLocalItem } from "./storage";
import { LocalStorageKeys } from "../types";
import { ROUTER_NAME } from "../constants";

type HttpRequestPayload = {
  method: string; // correct
  body?: unknown;
  retries?: number;
  header?: Record<string, string>; // Replace `;·//·` with `,· prettier/prettier
  responseType?: "json" | "blob";
};
export async function get<T>(endpoint: string, options?: Omit<HttpRequestPayload, "method">): Promise<T> {
  return httpRequest(endpoint, { method: "GET", ...options });
}

export async function post<T>(
  endpoint: string,
  body: unknown,
  header?: Record<string, string>,
  responseType?: "json" | "blob",
): Promise<T> {
  return httpRequest(endpoint, { method: "POST", body, header, responseType });
}

export async function put<T>(endpoint: string, body: unknown, header?: Record<string, string>): Promise<T> {
  return httpRequest(endpoint, { method: "PUT", body, header });
}

export async function patch<T>(endpoint: string, body: any, header?: Record<string, string>): Promise<T> {
  return httpRequest(endpoint, { method: "PATCH", body, header });
}

export async function del<T>(endpoint: string): Promise<T> {
  return httpRequest(endpoint, { method: "DELETE" });
}

async function httpRequest<T>(endpoint: string, options: HttpRequestPayload): Promise<T> {
  const { method, body, retries = 3, header, responseType = "json" } = options;
  try {
    const token = await getLocalItem(LocalStorageKeys.AUTH_ACCESS_TOKEN);
    const config: AxiosRequestConfig = {
      // baseURL: EnvServiceInstance.get(EnvironmentConfig.PUBLIC_API_BASE_URL),
      baseURL: "/",
      url: endpoint,
      method: method,
      headers: {
        accept: "application/json",
        ...(body instanceof FormData ? {} : { "content-type": "application/json" }),
        Authorization: `Bearer ${token}`,
        ...header,
      },
      data: body,
      responseType,
    };

    const response = await axios(config);

    if (response.status >= 200 && response.status < 300) {
      const data = response.data;
      if (data && data.success === false && data.error) {
        // statusDialogStore.set({ status: 'failed' });
        throw new Error(data.error.message);
      }
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error: any) {
    if (error.status === 401 && retries > 0) {
      // await AuthServiceInstance.renewToken();
      return httpRequest<T>(endpoint, { method, body, retries: retries - 1 });
    } else if (error.status === 401 && getLocalItem(LocalStorageKeys.AUTH_ACCESS_TOKEN)) {
      // await AuthServiceInstance.signOut();
      const currentPath = window.location.pathname + window.location.search;
      window.location.href = `${ROUTER_NAME.LOGIN}?redirect=${encodeURIComponent(currentPath)}`;
    } else {
      // statusDialogStore.set({ status: 'failed' });
    }

    console.error("Error in httpRequest:", error);
    throw error;
  }
}
