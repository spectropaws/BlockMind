import { useQuery } from "@tanstack/react-query";
import api_methods from "../lib/api";

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["calendar"],
    queryFn: api_methods.getRequest("/events"),
  });
};
