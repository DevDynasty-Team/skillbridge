import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="main-navbar" className="main-navbar">
      <div id="navbar-brand" className="navbar-brand">
        <div id="navbar-logo-mark" className="navbar-logo-mark">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FGwT8P48X8bCO8GiO2P7RDV1iQJUNAPwL6-RMFgkhA&s"
          alt="SkillBridge Logo"
          className="logoimage"
        />
        </div>
        <div id="navbar-brand-text" className="navbar-brand-text">
          <strong id="navbar-title">SkillBridge</strong>
          <span id="navbar-tagline">Learn | Connect | Grow</span>
        </div>
      </div>

      <ul id="navbar-links" className="navbar-links">
        <li id="navbar-home-item" className="navbar-item">
          <Link id="navbar-home-link" className="navbar-link" to="/">Home</Link>
        </li>
        <li id="navbar-register-item" className="navbar-item">
          <Link id="navbar-register-link" className="navbar-link" to="/register">Register</Link>
        </li>
        <li id="navbar-login-item" className="navbar-item">
          <Link id="navbar-login-link" className="navbar-link" to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;