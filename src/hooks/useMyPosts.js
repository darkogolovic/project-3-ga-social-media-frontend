import { useQuery } from "@tanstack/react-query";
import postService from "../services/postService";

export const useMyPosts = (userId) => {
  return useQuery({
    queryKey: ["myPosts", userId],
    queryFn: () => postService.getUserPosts(userId),
    enabled: !!userId
  });
};