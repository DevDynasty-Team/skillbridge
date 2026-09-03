import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Login.css";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    department: "",
    role: "student"
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const registerHandler = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = users.some(
      (user) => user.email.toLowerCase() === form.email.trim().toLowerCase()
    );

    if (emailExists) {
      setMessage("An account with this email already exists. Please login.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
      college: form.college.trim(),
      department: form.department.trim(),
      role: form.role
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.setItem("userRole", newUser.role);
    localStorage.setItem("userName", newUser.name);
    localStorage.setItem("userEmail", newUser.email);
    localStorage.setItem("userCollege", newUser.college);
    localStorage.setItem("userDepartment", newUser.department);

    if (newUser.role === "industry") {
      localStorage.setItem("companyName", newUser.name);
    }

    setMessage("Registration successful! Opening your dashboard...");

    setTimeout(() => navigate("/dashboardall"), 700);
  };

  return (
    <div id="register-page" className="register-page">
      <Navbar />

      <main id="register-main" className="register-main">
        <section id="register-card" className="register-card">
          <div id="register-heading" className="auth-heading">
            <span id="register-label" className="auth-label">SKILLBRIDGE</span>
            <h1 id="register-title">Create Account</h1>
            <p id="register-subtitle">Join the academia-industry network.</p>
          </div>

          <form id="register-form" className="auth-form" onSubmit={registerHandler}>
            <div id="register-name-group" className="auth-field">
              <label htmlFor="register-name">Full Name</label>
              <input id="register-name" className="auth-input" name="name" type="text"
                placeholder="Enter your full name" value={form.name} onChange={handleChange} required />
            </div>

            <div id="register-email-group" className="auth-field">
              <label htmlFor="register-email">Email</label>
              <input id="register-email" className="auth-input" name="email" type="email"
                placeholder="Enter your email" value={form.email} onChange={handleChange} required />
            </div>

            <div id="register-password-group" className="auth-field">
              <label htmlFor="register-password">Password</label>
              <input id="register-password" className="auth-input" name="password" type="password"
                placeholder="Create a password" value={form.password} onChange={handleChange} required />
            </div>

            <div id="register-college-group" className="auth-field">
              <label htmlFor="register-college">College</label>
              <input id="register-college" className="auth-input" name="college" type="text"
                placeholder="Enter your college" value={form.college} onChange={handleChange} required />
            </div>

            <div id="register-department-group" className="auth-field">
              <label htmlFor="register-department">Department</label>
              <input id="register-department" className="auth-input" name="department" type="text"
                placeholder="Enter your department" value={form.department} onChange={handleChange} required />
            </div>

            <div id="register-role-group" className="auth-field">
              <label htmlFor="register-role">Role</label>
              <select id="register-role" className="auth-select" name="role"
                value={form.role} onChange={handleChange}>
                <option value="student">Student</option>
                <option value="academician">Academician</option>
                <option value="industry">Industry</option>
              </select>
            </div>

            <button id="register-submit" className="auth-submit" type="submit">
              REGISTER
            </button>
          </form>

          {message && <p id="register-message" className="auth-message">{message}</p>}

          <p id="register-login-text" className="auth-footer">
            Already have an account? <Link id="register-login-link" to="/login">Login</Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Register;
