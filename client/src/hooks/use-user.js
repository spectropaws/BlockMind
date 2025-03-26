import { useMutation, useQuery } from "@tanstack/react-query";
import api_methods from "../lib/api";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/Redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useGetUser = () => {
  const { user } = useSelector((state) => state.auth);
  return useQuery({
    queryKey: ["user", user?.email],
    queryFn: () => api_methods.getRequest("/user"),
    refetchOnWindowFocus: false,
    // enabled: !user
  });
};

export const useLogoutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => api_methods.postRequest("/logout"),
    onSuccess: () => {
      dispatch(setUser(null));
      toast.success("Logout Successful");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
// export const useLogoutUser = (enable) => {
//   return useQuery({
//     queryKey: ["logout"],
//     queryFn: () => api_methods.getRequest("/logout"),
//     enabled: enable,
//   });
// };

export const useSignUpUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/register", data),
    onSuccess: (data) => {
      dispatch(setLoading());
      dispatch(setUser(data.data.user));
      toast.success("Registered Successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useLoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/login", data),
    onSuccess: (data) => {
      dispatch(setLoading());
      dispatch(setUser(data.data.user));
      toast.success("Login Successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
