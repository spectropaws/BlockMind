import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import router from "./routes";
import { useGetUser } from "@/hooks/use-user";
import { Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/Redux/Slices/authSlice";

const RouetApp = () => {
  const { data, isLoading, isFetched, isError, error } = useGetUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
  }, [dispatch]);

  useEffect(() => {
    if (isFetched) {
      dispatch(setUser(data?.data.user));
    //window.location.href = "http://localhost:5173";
    }
  }, [isFetched, data, dispatch, isLoading]);

  if (isLoading && !isFetched) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader2 className="animate-spin" size={50} />
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

export default RouetApp;
