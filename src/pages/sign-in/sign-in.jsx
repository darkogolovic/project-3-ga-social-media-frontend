import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import authService from "../../services/authService";
import Welcome from "../../components/Welcome";

const SignIn = () => {
  const navigate = useNavigate();
  const { mutate, isLoading,error } = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success(data.message);
      navigate("/feed");
    },
    onError: (err) => {
      if (err.response?.status === 400) {
        toast.error("Invalid credentials");
      } else {
        toast.error("Login failed. Try again later.");
      }
    },
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#1a1a2e] to-[#16213e] px-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
        <Welcome />

        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">
              Login
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 focus:bg-white/10 transition"
              />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 focus:bg-white/10 transition"
              />

              <button
                type="submit"
                className="mt-3 py-4 rounded-lg bg-gradient-to-tr from-blue-400 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <button
              id="login"
              className="mt-5 text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
