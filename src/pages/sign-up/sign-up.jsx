import { useState, useEffect} from 'react'
import '../sign-in/sign.css'
import toast from 'react-hot-toast';
import Welcome from '../../components/Welcome';

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
        <div className='sign'>
        <div className="mainholder">
        <Welcome />
        <div className="container">
            <div className="box">
                
                <h2>Sign Up</h2>
                <p>Create your account to get started</p>
                <br/>
            

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
            </div>
        </div>
        </div>
    )
}

export default SignUp;