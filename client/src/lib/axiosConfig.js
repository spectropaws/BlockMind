import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});
