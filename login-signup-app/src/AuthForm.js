import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container">
      {isLogin ? (
        <div id="login-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="login-email">Email</label>
            <input type="email" id="login-email" placeholder="Enter your email" required />

            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
          <div className="toggle-link">
            Don’t have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Sign Up
            </a>
          </div>
        </div>
      ) : (
        <div id="signup-form">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="signup-name">Full Name</label>
            <input type="text" id="signup-name" placeholder="Enter your name" required />

            <label htmlFor="signup-email">Email</label>
            <input type="email" id="signup-email" placeholder="Enter your email" required />

            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Create a password" required />

            <button type="submit">Sign Up</button>
          </form>
          <div className="toggle-link">
            Already have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
