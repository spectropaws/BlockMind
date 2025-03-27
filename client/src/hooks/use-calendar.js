import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "../lib/api";
import { useDispatch } from "react-redux";
import { setEventData } from "@/Redux/Slices/eventsDataSlice";

// export const useGetEvents = () => {
//   return useQuery({
//     queryKey: ["calendar"],
//     m: api_methods.postRequest(
//       "http://192.168.70.35:5001/schedule_calendar"
//     ),
//   });
// };

export const useGetEvents = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data) =>
      api_methods.postRequest(
        "http://192.168.70.35:5001/schedule_calendar",
        data
      ),
    onSuccess: (data) => {
      dispatch(setEventData(data.data.schedule));
      console.log(data.data.schedule);
    },
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["calendar"]);
    },
  });
};
