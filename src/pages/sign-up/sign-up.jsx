import { useState } from "react";
import "../sign-in/sign.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import Welcome from "../../components/Welcome";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate, isLoading} = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => toast.success(data.message),
    onError: (data) => toast.error(data.message),
  });

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords must match");
      return;
    }
    localStorage.setItem("verifyEmail", formData.email)
    mutate(formData);
    navigate("/verify");
  };

  return (
    <div className="mainholder">
      <Welcome />
      <div className="container">
        <div className="box">
          <h2>Sign Up</h2>
          <p>Create your account to get started</p>
          <br />

          <form onSubmit={handleSubmit} className="form">
            <div className="group">
              <label htmlFor="email"></label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <label htmlFor="username"></label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <label htmlFor="password"></label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <label htmlFor="confirmPassword"></label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
