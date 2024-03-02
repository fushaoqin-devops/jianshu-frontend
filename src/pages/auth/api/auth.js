import request from "../../../utils/request";

const authAPI = {
  login(credentials) {
    return request({
      url: "/user/login",
      method: "post",
      data: credentials,
      withCredentials: true,
    });
  },
  register(credentials) {
    return request({
      url: "user/register",
      method: "post",
      data: credentials,
    });
  },
  verify() {
    return request({
      url: "/auth/verify",
      method: "get",
      withCredentials: true,
    });
  },
  logout() {
    return request({
      url: "/user/logout",
      method: "get",
      withCredentials: true,
    });
  },
};

export default authAPI;
