
import api from "../lib/axios";

 const authService = {
  register: async (data) => {
   const res = await api.post("/register", data)
    return res.data
  },

  verify: async (data) => {
    const res = await api.post("/verify", data)
    return res.data
  },
  resendCode:async (email) =>{
   const res = await api.post("/resend-code", { email })
   return res.data
  },
  login: async (data) => {
    const res = await api.post("/login", data)
    return res.data

  },
  me: async() => {
   const res = await api.get("/me")
    return res.data

  },
};

export default authService


