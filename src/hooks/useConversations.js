import { useQuery } from "@tanstack/react-query";
import conversationService from "../services/conversationService";

export const useConversations = () =>
  useQuery({ queryKey: ["conversations"], queryFn: conversationService.getAll });

export const useConversation = (id) =>
  useQuery({
    queryKey: ["conversation", id],
    queryFn: () => conversationService.getOne(id),
  });
