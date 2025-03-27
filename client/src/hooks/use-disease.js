import { useMutation } from "@tanstack/react-query";
import api_methods from "../lib/api";
import { useDispatch } from "react-redux";
import { setDiseaseData } from "@/Redux/Slices/diseaseDataSlice";

export const useDiseaseDetection = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("", data),
    onSuccess: (data) => {
      dispatch(setDiseaseData(data.data));
    },
  });
};
