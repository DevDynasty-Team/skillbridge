import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <nav id="dashboard-navbar" className="dashboard-navbar">
      <Link id="dashboard-navbar-home" className="dashboard-navbar-link" to="/">
        SkillBridge
      </Link>

      <div id="dashboard-navbar-links" className="dashboard-navbar-links">
        <Link id="dashboard-navbar-home-link" className="dashboard-navbar-link" to="/">
          Home
        </Link>
        <Link id="dashboard-navbar-contact-link" className="dashboard-navbar-link" to="/contacts">
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;