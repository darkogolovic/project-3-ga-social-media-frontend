import { useState } from "react";
import './sign.css'
import Welcome from "../../components/Welcome";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";


const SignIn = () => {
    const navigate = useNavigate()
    const {mutate, isLoading}=useMutation({
        mutationFn: authService.login,
       onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        toast.success(data.message)
        navigate("/feed");
        },
        onError: (data)=>toast.error(data.message)
    })
 
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
       mutate(formData)
    };

    return (
        <div className="sign">
        <div className="mainholder">
        <Welcome/>
        <div className="container">
            <div className="box">
                <h2>Login</h2>

                <form onSubmit={handleSubmit} className="form">
                    <div className="group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="button">
                        Sign In
                    </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;
