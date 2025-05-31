import { getCookie } from "react-use-cookie";

const token = getCookie("token");

export const changeName = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeImage = (formData) => {
    return fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
}