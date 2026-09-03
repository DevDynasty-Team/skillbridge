import React, { useState } from "react";
import PostOpportunity from "../industry/PostOpportunity";
import IndustryPosts from "../industry/IndustryPosts";
import IndustryApplications from "../industry/IndustryApplications";
import "./Dashboard.css";

const IndustryDashboard = () => {
  const [view, setView] = useState("home");

  const tabs = [
    ["industry-nav-home", "home", "Home"],
    ["industry-nav-post", "post", "Post Opportunity"],
    ["industry-nav-posts", "posts", "My Posts"],
    ["industry-nav-applications", "applications", "View Applicants"]
  ];

  return (
    <section id="industry-dashboard" className="role-dashboard">
      <header id="industry-dashboard-header" className="role-dashboard-header">
        <h2 id="industry-dashboard-title" className="role-dashboard-title">Industry Dashboard</h2>
        <p id="industry-dashboard-description" className="role-dashboard-description">
          Publish opportunities and manage applications from students.
        </p>
      </header>

      <nav id="industry-dashboard-navigation" className="role-navigation">
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

      <section id="industry-dashboard-content" className="role-dashboard-content">
        {view === "home" && (
          <p id="industry-dashboard-welcome" className="role-welcome">
            Welcome, {localStorage.getItem("companyName") || "Industry Partner"}.
            Post internships or jobs and review student applications.
          </p>
        )}
        {view === "post" && <PostOpportunity />}
        {view === "posts" && <IndustryPosts onlyMine />}
        {view === "applications" && <IndustryApplications />}
      </section>
    </section>
  );
};

export default IndustryDashboard;
