import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import messageService from "../services/messageService";

export const useMessages = (id) =>
  useQuery({
    queryKey: ["messages", id],
    queryFn: () => messageService.get(id),
    enabled: !!id,
  });

export const useSendMessage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: messageService.send,
    onSuccess: (_, variables) => {
      qc.invalidateQueries(["messages", variables.conversationId]);
    },
  });
};
