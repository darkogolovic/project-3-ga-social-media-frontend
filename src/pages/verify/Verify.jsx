


const Verify = () => {
  return (
    <div className="container">
      <div className="box">
    <h1 className="verify-title">Verify Your Email</h1>

    <p style={{padding:'16px'}}>
      We've sent a 6-digit code to your email <strong>email</strong>.
      Please enter it below to verify your account.
    </p>

    {null? <div>Error</div>:null}

    <form  className="form">
      
      <div className="group">
        <label htmlFor="code" className="form-label"></label>
        <input type="text" id="code" name="code" placeholder="Enter your 6-digit code" maxLength="6" required />
      </div>

      <button type="submit" className="button">Verify</button>
    </form>

    <form  className="form">
      <input type="hidden" name="email"  />
      <button type="submit" className="button">Resend Code</button>
    </form>

</div>
  </div>
  )
}

export default Verify