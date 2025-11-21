import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Verify = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: localStorage.getItem("verifyEmail") || "",
    verificationCode: "",
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: authService.verify,
    onSuccess: (data) => toast.success(data.message),
    onError: (data) => toast.error(data.message),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
    navigate("/");
  };

  const onResetSubmit = () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-6 text-slate-100">
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl shadow-black/70 p-6 sm:p-8 space-y-6">

        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            VERIFY YOUR EMAIL
          </h1>

          <p className="text-xs text-slate-400">
            We've sent a 6-digit code to your email.
          </p>
        </div>

        <form onSubmit={handleCodeSubmit} className="space-y-5">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="verificationCode"
              placeholder="Enter your 6-digit code"
              maxLength={6}
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify"
            )}
          </button>
        </form>

        <form onSubmit={onResetSubmit} className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-full text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition"
          >
            Resend Code
          </button>
        </form>

      </div>

      <Toaster />
    </div>
  );
};

export default Verify;
