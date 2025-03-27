import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  // baseURL: "http://192.168.70.35.5001",
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});
