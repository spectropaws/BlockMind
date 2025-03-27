import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "../lib/api";

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["calendar"],
    queryFn: api_methods.getRequest("/events"),
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
