import { newProductTypes, productsTypes } from "@/types";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

// Set up cache with configuration
const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 min
  clearOnStale: true, // Clear data when it's stale (expired)
});

// Create an axios instance with the cache adapter
const api = axios?.create({
  adapter: cache?.adapter,
});

// Clear the cache when needed
// This function can be called to refresh the cache manually
export const refreshCache = () => {
  (cache?.store as { clear: () => void })?.clear();
};

/*---> Fetch all products <---*/
export const fetchAllProducts = async (): Promise<productsTypes> => {
  return api
    ?.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => response?.data)
    .catch((error) => {
      console.error(
        "Error fetch all products:",
        error?.response?.data?.message,
      );
    });
};

/*---> Create a new product <---*/
export const createNewProduct = async (
  newProduct: Partial<newProductTypes>,
) => {
  return axios
    ?.post(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, newProduct, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      withCredentials: true, // send request with cookies
    })
    .then((response) => response?.data)
    .catch((error) => {
      console.error(
        "Error create a new product:",
        error?.response?.data?.message,
      );
    });
};

/*---> Update a product <---*/
export const updateProduct = async (
  id: string | null,
  product: Partial<newProductTypes>,
) => {
  return axios
    ?.put(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, product, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      withCredentials: true, // send request with cookies
    })
    .then((response) => response?.data)
    .catch((error) => {
      console.error("Error update a product:", error?.response?.data?.message);
    });
};

/*---> Remove product <---*/
export const removeProduct = async (id: string | null) => {
  return axios
    ?.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true, // send request with cookies
    })
    .then((response) => response?.data)
    .catch((error) => {
      console.error("Error delete a product:", error?.response?.data?.message);
    });
};
