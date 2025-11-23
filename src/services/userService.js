import api from "../lib/axios";

const userService = {
  getAll: async () => {
    const res = await api.get("/users");
    return res.data;
  },
  getOne: async (id) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },
  edit: async (id, formData) => {
  const res = await api.put(`/user/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}
};

export default userService;
