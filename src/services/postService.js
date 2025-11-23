import api from "../lib/axios";

const postService = {
  getAllPosts: async () => {
    const res = await api.get("/posts");
    return res.data;
  },
  getUserPosts: async (userId) => {
    const res = await api.get(`/posts/user/${userId}`);
    return res.data;
  },

  createPost: async (formData) => {
    const res = await api.post("/posts", formData);
    return res.data;
  },

  getPost: async (id) => {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  },

  updatePost: async (id, data) => {
    const res = await api.put(`/posts/${id}`, data);
    return res.data;
  },

  deletePost: async (id) => {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  },

  likePost: async (id) => {
    const res = await api.put(`/posts/${id}/likes`);
    return res.data;
  },

  addComment: async (id, data) => {
    const res = await api.post(`/posts/${id}/comments`, data);
    return res.data;
  },

  editComment: async (id, cid, data) => {
    const res = await api.put(`/posts/${id}/comments/${cid}`, data);
    return res.data;
  },

  deleteComment: async (id, cid) => {
    const res = await api.delete(`/posts/${id}/comments/${cid}`);
    return res.data;
  },
  getComments : async (postId) => {
  const res = await fetch(`/posts/${postId}/comments`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json(); 
  }

};


export default postService;
