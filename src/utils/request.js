import axios from "axios";
import { toast } from "react-toastify";

// Base API configuration
const service = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      if (res.code !== 401) {
        toast.error(res.message);
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    toast.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
