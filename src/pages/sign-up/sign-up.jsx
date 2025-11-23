import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";
import Welcome from "../../components/Welcome";

const SignUp = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => toast.success(data.message),
    onError: (err) => toast.error(err?.response?.data?.message || "Error"),
  });

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords must match");
      return;
    }

    localStorage.setItem("verifyEmail", formData.email);
    mutate(formData);
    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6">
      <div className="flex w-full max-w-5xl bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/70 backdrop-blur-xl">

        <div className="hidden md:flex flex-1 bg-slate-900/40 border-r border-slate-800">
          <Welcome />
        </div>

      
        <div className="flex-1 flex flex-col justify-center p-10 text-slate-100">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-slate-400 mb-8">Join your circle today</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500/70 focus:outline-none"
              />
            </div>

            {/* Username */}
            <div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500/70 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500/70 focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500/70 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
          
          <p className="p-4 text-center block md:hidden">
            Already have an account?{" "}
            <span
              className="text-sky-400 hover:text-sky-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign in
            </span>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
