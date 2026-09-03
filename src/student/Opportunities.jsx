import React, { useEffect, useState } from "react";
import "./Opportunities.css";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [applications, setApplications] = useState([]);

  const loadData = () => {
    setOpportunities(JSON.parse(localStorage.getItem("opportunities") || "[]"));
    setApplications(JSON.parse(localStorage.getItem("applications") || "[]"));
  };

  useEffect(() => {
    loadData();
  }, []);

  const applyToOpportunity = (opportunity) => {
    const applicant = localStorage.getItem("userName") || "Demo Student";
    const currentApplications = JSON.parse(localStorage.getItem("applications") || "[]");

    const alreadyApplied = currentApplications.some(
      (application) =>
        application.opportunityId === opportunity.id &&
        application.applicant === applicant
    );

    if (alreadyApplied) {
      alert("You have already applied to this opportunity.");
      return;
    }

    const newApplication = {
      id: Date.now(),
      opportunityId: opportunity.id,
      opportunityTitle: opportunity.title,
      applicant,
      role: "student",
      status: "pending"
    };

    const updatedApplications = [newApplication, ...currentApplications];
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
    setApplications(updatedApplications);
    alert("Application submitted successfully!");
  };

  const isApplied = (id) => {
    const applicant = localStorage.getItem("userName") || "Demo Student";
    return applications.some(
      (application) =>
        application.opportunityId === id && application.applicant === applicant
    );
  };

  return (
    <div id="opportunities-section" className="opportunities-section">
      <div id="opportunities-heading" className="component-heading">
        <h3 id="opportunities-title">Available Opportunities</h3>
        <p id="opportunities-description">Internships and jobs posted by industry partners.</p>
      </div>

      {opportunities.length === 0 && (
        <p id="opportunities-empty" className="empty-state">
          No opportunities available right now.
        </p>
      )}

      <div id="opportunities-list" className="opportunities-list">
        {opportunities.map((opportunity) => (
          <article id={`opportunity-card-${opportunity.id}`} className="opportunity-card" key={opportunity.id}>
            <div id={`opportunity-info-${opportunity.id}`} className="opportunity-info">
              <span className="opportunity-type">INTERNSHIP / JOB</span>
              <h4>{opportunity.title}</h4>
              <p>{opportunity.desc || opportunity.description}</p>

              <div className="opportunity-meta">
                <span><strong>Skills:</strong> {(opportunity.skills || []).join(", ") || "Not specified"}</span>
                <span><strong>Posted by:</strong> {opportunity.postedBy || "Industry Partner"}</span>
              </div>
            </div>

            <button
              id={`opportunity-apply-${opportunity.id}`}
              className="opportunity-apply-button"
              disabled={isApplied(opportunity.id)}
              onClick={() => applyToOpportunity(opportunity)}
            >
              {isApplied(opportunity.id) ? "Applied" : "Apply"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
