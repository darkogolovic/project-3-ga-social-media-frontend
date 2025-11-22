import { useQuery } from "@tanstack/react-query";
import conversationService from "../services/conversationService";



export const useConversations = (userId) =>
  useQuery({
    queryKey: ["conversations", userId],
    queryFn: () => conversationService.getUserConversations(userId),
    enabled: !!userId,
  });


export const useSingleConversation = (id) =>
  useQuery({
    queryKey: ["conversation", id],
    queryFn: () => conversationService.getOne(id),
  });
