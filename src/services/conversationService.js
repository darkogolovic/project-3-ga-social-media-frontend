import api from "../lib/axios";

const conversationService = {
  createConversation: async (members) => {
    const res = await api.post("/conversations", { members });
    return res.data;
  },

  getUserConversations: async (userId) => {
    const res = await api.get(`/conversations/${userId}`);
    return res.data;
  },

  findConversation: async (firstId, secondId) => {
    const res = await api.get(
      `/conversations/find/${firstId}/${secondId}`
    );
    return res.data;
  },
};

export default conversationService;
