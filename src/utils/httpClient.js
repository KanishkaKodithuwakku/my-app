import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default httpClient;
