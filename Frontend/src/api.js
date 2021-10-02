import axios from "axios";
axios.defaults.headers.post["Accept"] = "*/*";
axios.defaults.port = 8080;
const jsonInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

jsonInstance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    return { data: null, message: error.message, error: true };
  }
);

export const getCurrentExibitions = () =>
  jsonInstance.get("exhibitions/current").then((response) => {
    return response;
  });
export const getExibitionsOnView = () =>
  jsonInstance.get("exhibitions/onview").then((response) => {
    return response;
  });
export const getCollections = (search = "") => {
  return jsonInstance.get(`/collections${search}`).then((response) => {
    return response;
  });
};
