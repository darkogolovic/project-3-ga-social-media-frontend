import { useState } from "react";
import { signIn } from "../../services/authService";
import './sign.css'
import Welcome from "../../components/Welcome";


const SignIn = () => {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (evt) => {
        setMessage("");
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log("Form submitted:", formData);

        try {
            const signedInUser = await signIn(formData);
            setUser(signedInUser);
            navigate("/");
        } catch (err) {
            setMessage(err.message);
        }
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
