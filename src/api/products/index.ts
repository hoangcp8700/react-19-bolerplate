import { queryString } from "@/shared/helpers";
import { get } from "@/shared/utils";
import { configService } from "../configService";

export async function getProducts(params: Record<string, unknown>) {
  return await get<unknown>(`${configService.endpoints.products}${queryString(params)}`);
}

export async function getProductDetail(id: string) {
  await setTimeout(() => {
    console.log("loading");
  }, 3000);
  return await get<unknown>(`${configService.endpoints.products}/${id}`);
}
