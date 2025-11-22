import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import messagesService from "../services/messagesService";

export const useMessages = (id) =>
  useQuery({
    queryKey: ["messages", id],
    queryFn: () => messagesService.getMessages(id),
    enabled: !!id,
  });

export const useSendMessage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: messagesService.sendMessage, 
    onSuccess: (_, variables) => {
      qc.invalidateQueries(["messages", variables.conversationId]);
    },
  });
};
