


const Verify = () => {
  return (
    <div className="container">
    <h1 className="verify-title">Verify Your Email</h1>

    <p className="verify-info">
      We've sent a 6-digit code to your email <strong>email</strong>.
      Please enter it below to verify your account.
    </p>

    {null? <div>Error</div>:null}

    <form  >
      
      <div className="form-group">
        <label htmlFor="code" className="form-label"></label>
        <input type="text" id="code" name="code" placeholder="Enter your 6-digit code" maxLength="6" required />
      </div>

      <button type="submit" className="login-btn">Verify</button>
    </form>

    <form  className="resend-form">
      <input type="hidden" name="email"  />
      <button type="submit" className="resend-btn">Resend Code</button>
    </form>


  </div>
  )
}

export default Verify