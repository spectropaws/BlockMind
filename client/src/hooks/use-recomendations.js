import { useMutation } from "@tanstack/react-query";
import api_methods from "../lib/api";
import { useDispatch } from "react-redux";
import { setRecomendations } from "@/Redux/Slices/recomendationDataSlice";

export const useGetRecomendations = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data) =>
      api_methods.postRequest("http://192.168.70.35:5001/predict_crop", data),
    onSuccess: (data) => {
      dispatch(setRecomendations(data.data));
      console.log(data.data);
    },
  });
};
