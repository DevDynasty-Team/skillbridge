import React, { useState } from "react";
import Opportunities from "../student/Opportunities";
import IndustryPosts from "../industry/IndustryPosts";
import "./Dashboard.css";

const AcademicianDashboard = () => {
  const [view, setView] = useState("home");

  const tabs = [
    ["academician-nav-home", "home", "Home"],
    ["academician-nav-opportunities", "opportunities", "Explore Opportunities"],
    ["academician-nav-posts", "posts", "Posted Opportunities"],
    ["academician-nav-fdp", "fdp", "Faculty Development"]
  ];

  return (
    <section id="academician-dashboard" className="role-dashboard">
      <header id="academician-dashboard-header" className="role-dashboard-header">
        <h2 id="academician-dashboard-title" className="role-dashboard-title">Academician Dashboard</h2>
        <p id="academician-dashboard-description" className="role-dashboard-description">
          Explore industry opportunities and programs for academic collaboration.
        </p>
      </header>

      <nav id="academician-dashboard-navigation" className="role-navigation">
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

      <section id="academician-dashboard-content" className="role-dashboard-content">
        {view === "home" && (
          <p id="academician-dashboard-welcome" className="role-welcome">
            Welcome, {localStorage.getItem("userName") || "Academician"}.
            Browse industry opportunities and keep track of useful programs.
          </p>
        )}
        {view === "opportunities" && <Opportunities />}
        {view === "posts" && <IndustryPosts />}
        {view === "fdp" && (
          <div id="academician-fdp-placeholder" className="role-welcome">
            Faculty Development Program listing can be added here when FDP data is introduced.
          </div>
        )}
      </section>
    </section>
  );
};

export default AcademicianDashboard;
