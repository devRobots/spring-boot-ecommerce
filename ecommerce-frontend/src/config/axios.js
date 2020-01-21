import axios from "axios";

const baseURL = "http://localhost:8080/api/";

const axiosClient = axios.create({
  baseURL: baseURL
});

export default axiosClient;
