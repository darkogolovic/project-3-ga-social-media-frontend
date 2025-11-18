

import React, {useState} from "react";

import ' ./sign-in.css';


const SignIn = () => {

 
return (

    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            
          </div>
            <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
          </form>
      </div>
    </div>
  );
}
          export default SignIn;