import api from "../lib/axios";

const messageService = {
  sendMessage: async (data) => {
    const res = await api.post("/messages", data);
    return res.data;
  },

  getMessages: async (conversationId) => {
    const res = await api.get(`/messages/${conversationId}`);
    return res.data;
  },
};

export default messageService;
