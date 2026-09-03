import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (item) => item.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!user) {
      setMessage("No account found with this email. Please register first.");
      return;
    }

    if (user.password !== password) {
      setMessage("Incorrect password. Please try again.");
      return;
    }

    localStorage.setItem("userRole", user.role);
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userCollege", user.college);
    localStorage.setItem("userDepartment", user.department);

    if (user.role === "industry") {
      localStorage.setItem("companyName", user.name);
    }

    setMessage(`Welcome back, ${user.name}!`);

    setTimeout(() => navigate("/dashboardall"), 700);
  };

  return (
    <div id="login-page" className="login-page">
      <Navbar />

      <main id="login-main" className="login-main">
        <section id="login-card" className="login-card">
          <div id="login-heading" className="auth-heading">
            <span id="login-label" className="auth-label">SKILLBRIDGE</span>
            <h1 id="login-title">Welcome Back</h1>
            <p id="login-subtitle">Login to continue to your dashboard.</p>
          </div>

          <form id="login-form" className="auth-form" onSubmit={loginHandler}>
            <div id="login-email-group" className="auth-field">
              <label id="login-email-label" htmlFor="login-email">Email</label>
              <input
                id="login-email"
                className="auth-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div id="login-password-group" className="auth-field">
              <label id="login-password-label" htmlFor="login-password">Password</label>
              <input
                id="login-password"
                className="auth-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <button id="login-submit" className="auth-submit" type="submit">
              LOGIN
            </button>
          </form>

          {message && (
            <p id="login-message" className="auth-message">{message}</p>
          )}

          <p id="login-register-text" className="auth-footer">
            Don't have an account? <Link id="login-register-link" to="/register">Register</Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
