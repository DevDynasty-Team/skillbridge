import React from "react";
import { useNavigate } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import IndustryDashboard from "./IndustryDashboard";
import AcademicianDashboard from "./AcademicianDashboard";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const logout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userCollege");
    localStorage.removeItem("userDepartment");
    localStorage.removeItem("companyName");
    navigate("/");
  };

  if (!role) {
    return (
      <main id="dashboard-unauthorized" className="dashboard-unauthorized">
        <h2>Login Required</h2>
        <p>Please login or register to access SkillBridge.</p>
        <button id="dashboard-login-button" className="dashboard-main-button" onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </main>
    );
  }

  return (
    <div id="dashboard-root" className="dashboard-root">
      <header id="dashboard-header" className="dashboard-header">
        <div>
          <span id="dashboard-brand" className="dashboard-brand">SkillBridge</span>
          <h1 id="dashboard-title" className="dashboard-title">Dashboard</h1>
          <p id="dashboard-role" className="dashboard-role">
            Signed in as <strong>{localStorage.getItem("userName")}</strong> · {role}
          </p>
        </div>

        <button id="dashboard-logout-button" className="dashboard-logout-button" onClick={logout}>
          Logout
        </button>
      </header>

      <main id="dashboard-content" className="dashboard-content">
        {role === "student" && <StudentDashboard />}
        {role === "industry" && <IndustryDashboard />}
        {role === "academician" && <AcademicianDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;
