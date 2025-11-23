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
export const useSummarizeMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ messageId }) => messagesService.summarize(messageId),
    onSuccess: (updatedMessage) => {
      // update cache za poruke u trenutnom razgovoru
      queryClient.setQueryData(["messages", updatedMessage.conversationId], (old) => {
        if (!old) return [updatedMessage];
        return old.map((msg) =>
          msg._id === updatedMessage._id ? updatedMessage : msg
        );
      });
    },
  });
};
