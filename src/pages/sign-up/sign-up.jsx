import { useState, useEffect} from 'react'
import '../sign-in/sign.css'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router";

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.55)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalBox = {
  background: "white",
  padding: "28px",
  borderRadius: "14px",
  textAlign: "center",
  width: "320px",
  maxWidth: "90%",
  boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
  transform: "translateY(0)",
};

const titleStyle = {
  margin: 0,
  marginBottom: "12px",
  fontSize: "18px",
  color: "#222",
};

const messageStyle = {
  margin: 0,
  marginBottom: "18px",
  color: "#555",
  fontSize: "14px",
};

const closeBtn = {
  padding: "10px 16px",
  border: "none",
  background: "#ef4444",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
};

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords must match')
            return
        }
        
    }

    return (
        <div className="container">
            <div className="box">
                <h2>Sign Up</h2>
                <p>Create your account to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div className="group">
                    <label htmlFor="email" ></label>
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

                <button  onClick={()=>handleSubmit()} type="submit" className="button" >
                    Sign Up
                </button>
            </form>
            
        </div>
    )
}

export default SignUp;