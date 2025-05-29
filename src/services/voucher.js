import { get } from "lodash";
import { getCookie } from "react-use-cookie";

const token = getCookie("token");

export const fetchVouchers = (url) =>
  fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json());


export const deleteVoucher = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};