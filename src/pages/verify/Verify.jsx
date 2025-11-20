import { useMutation } from "@tanstack/react-query"
import authService from "../../services/authService"
import { useNavigate } from "react-router"
import toast, { Toaster } from "react-hot-toast"
import { useState } from "react"



const Verify = () => {
  const navigate = useNavigate()
  const [formData,setFormData]=useState({
    email:localStorage.getItem('verifyEmail')|| '',
    verificationCode: ''
  })
 const {mutate,isLoading}=  useMutation({
  mutationFn:authService.verify,
  onSuccess: (data)=> toast.success(data.message),
  onError: (data)=> toast.error(data.message)
 })
 const handleChange = (e)=>{
   setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
 }
 const handleCodeSubmit = (e)=>{
    e.preventDefault()
    mutate(formData);
    navigate('/')

 }
 const onResetSubmit = ()=>{}

  return (
    <div className="container">
      <div className="box">
    <h1 className="verify-title">Verify Your Email</h1>

    <p style={{padding:'16px'}}>
      We've sent a 6-digit code to your email <strong>email</strong>.
      Please enter it below to verify your account.
    </p>

    {null? <div>Error</div>:null}

    <form  className="form" onSubmit={handleCodeSubmit}>
      
      <div className="group">
        <label htmlFor="verificationCode" className="form-label"></label>
        <input type="text" id="code" name="verificationCode" placeholder="Enter your 6-digit code" maxLength="6" required onChange={handleChange}/>
      </div>

      <button type="submit" className="button">Verify</button>
    </form>

    <form  className="form" onSubmit={onResetSubmit}>
      <input type="hidden" name="email"  />
      <button type="submit" className="button">Resend Code</button>
    </form>

</div>
<Toaster />
  </div>
  )
}

export default Verify