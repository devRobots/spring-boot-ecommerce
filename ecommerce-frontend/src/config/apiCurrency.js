import axios from "axios";

const baseURL = "http://free.currconv.com/api/v7/convert?";
const apiKey = "apiKey=7a5021010bf3e186a1c6&";
const query = "q=USD_COP&compact=ultra";

const apiClient = axios.create({
  baseURL: baseURL + apiKey + query
});

export default apiClient;
