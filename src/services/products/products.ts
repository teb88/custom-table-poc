import { ProductsVM } from "../../models/server";

const PRODUCTS_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<ProductsVM> {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
