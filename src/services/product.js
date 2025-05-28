import { get } from "lodash";
import { getCookie } from "react-use-cookie";

const token = getCookie("token");

export const fetchProducts = (url) =>
  fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json());

export const storeProducts = (product_name, price) => {
  return fetch(import.meta.env.VITE_API_URL + "/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      product_name: product_name,
      price: price,
    }),
  });
};

export const deleteProduct = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = (id, product_name, price) => {
  return fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      product_name: product_name,
      price: price,
      created_at: new Date().toISOString(),
    }),
  });
};
