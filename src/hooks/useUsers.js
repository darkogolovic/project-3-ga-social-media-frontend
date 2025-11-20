import { useQuery } from "@tanstack/react-query";
import userService from "../services/userService";

export const useUsers = () =>
  useQuery({ queryKey: ["users"], queryFn: userService.getAll });

export const useUser = (id) =>
  useQuery({ queryKey: ["user", id], queryFn: () => userService.getOne(id) });
