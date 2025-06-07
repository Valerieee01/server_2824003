import { error } from "./alerts";

export const refrescarAccessToken = async (method, endpoint) => {
  if (method === "DELETE") {
    const request = await fetch(endpoint, {
      method: method,
    });
    const response = await request.json();
    if (response.success) {
      return response.data;
    } else {
      if (response.code === 403) {
        const resfreshToken = response.resfreshToken;
        console.log(resfreshToken);
      }
    }
  }
};
