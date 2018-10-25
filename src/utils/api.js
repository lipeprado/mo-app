import axios from "axios";

export const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000
});
