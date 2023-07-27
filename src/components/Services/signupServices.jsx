import http from "./httpServices";

export const signupUser = (data) => {
  return http.post("/user/register", data);
};
