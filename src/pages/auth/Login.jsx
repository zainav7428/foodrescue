import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    alert("Login Successful!");
  }

  return (
    <div className="login-page">

      <div className="login-left">

        <h1>
          Good Food.
          <br />
          Brighter Tomorrows
        </h1>

        <p>
          Join FoodRescue and help turn surplus food
          into hope for communities in need.
        </p>

      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back!</h2>

          <p>
            Login to continue making an impact.
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

            <div className="forgot-password">
              <a href="#">
                Forgot Password?
              </a>
            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="signup-text">
            Don't have an account?
            <a href="#">
              Sign Up
            </a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;