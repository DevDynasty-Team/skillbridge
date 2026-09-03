import React, { useState } from "react";
import SkillAssessment from "../student/SkillAssessment";
import Opportunities from "../student/Opportunities";
import Portfolio from "../student/Portfolio";
import StudentApplications from "../student/StudentApplications";
import "./Dashboard.css";

const StudentDashboard = () => {
  const [view, setView] = useState("home");

  const tabs = [
    ["student-nav-home", "home", "Home"],
    ["student-nav-assessment", "assessment", "Skill Assessment"],
    ["student-nav-opportunities", "opportunities", "Browse Opportunities"],
    ["student-nav-portfolio", "portfolio", "Portfolio"],
    ["student-nav-applications", "applications", "My Applications"]
  ];

  return (
    <section id="student-dashboard" className="role-dashboard">
      <header id="student-dashboard-header" className="role-dashboard-header">
        <h2 id="student-dashboard-title" className="role-dashboard-title">Student Dashboard</h2>
        <p id="student-dashboard-description" className="role-dashboard-description">
          Build your skill profile, find opportunities and track applications.
        </p>
      </header>

      <nav id="student-dashboard-navigation" className="role-navigation">
        {tabs.map(([id, value, label]) => (
          <button
            key={id}
            id={id}
            className={`role-nav-button ${view === value ? "active" : ""}`}
            onClick={() => setView(value)}
          >
            {label}
          </button>
        ))}
      </nav>

      <section id="student-dashboard-content" className="role-dashboard-content">
        {view === "home" && (
          <p id="student-dashboard-welcome" className="role-welcome">
            Welcome, {localStorage.getItem("userName") || "Student"}. Start with the skill
            assessment, then explore opportunities that match your interests.
          </p>
        )}
        {view === "assessment" && <SkillAssessment />}
        {view === "opportunities" && <Opportunities />}
        {view === "portfolio" && <Portfolio />}
        {view === "applications" && <StudentApplications />}
      </section>
    </section>
  );
};

export default StudentDashboard;
