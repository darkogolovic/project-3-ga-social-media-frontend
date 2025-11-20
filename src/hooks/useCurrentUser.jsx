import { useQuery } from "@tanstack/react-query";
import authService from "../services/authService";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: authService.me,
  });
};