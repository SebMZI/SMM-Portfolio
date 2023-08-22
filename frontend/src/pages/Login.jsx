import React from "react";

const Login = () => {
  return (
    <main className="login">
      <form className="login-form">
        <h1 className="login-title">Sign In</h1>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="error">Error handler</div>
        <button className="signin-btn">Sign In</button>
      </form>
    </main>
  );
};

export default Login;
