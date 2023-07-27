import http from "./httpServices";

export const loginUser = (data) => {
  return http.post("/user/login", data);
};
