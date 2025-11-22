// hooks/useOpenConversation.js
import { useMutation } from "@tanstack/react-query";
import conversationService from "../services/conversationService";

export const useOpenConversation = () => {
  return useMutation({
    mutationFn: async ({ currentUserId, otherUserId }) => {
      // Pokušaj prvo da nađeš konverzaciju
      let conversation = await conversationService.findConversation(currentUserId, otherUserId);

      // Ako ne postoji, kreiraj novu
      if (!conversation) {
        conversation = await conversationService.createConversation([currentUserId, otherUserId]);
      }

      return conversation;
    },
  });
};
