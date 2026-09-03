import React, { useEffect, useState } from "react";
import "./IndustryApplications.css";

const IndustryApplications = () => {
  const [applications, setApplications] = useState([]);

  const loadApplications = () => {
    const allApplications = JSON.parse(localStorage.getItem("applications") || "[]");
    const opportunities = JSON.parse(localStorage.getItem("opportunities") || "[]");
    const company = localStorage.getItem("companyName") || localStorage.getItem("userName") || "Demo Company";
    const companyOpportunityIds = opportunities
      .filter((opportunity) => opportunity.postedBy === company)
      .map((opportunity) => opportunity.id);

    setApplications(
      allApplications.filter((application) =>
        companyOpportunityIds.includes(application.opportunityId)
      )
    );
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const updateStatus = (id, status) => {
    const allApplications = JSON.parse(localStorage.getItem("applications") || "[]");
    const updated = allApplications.map((application) =>
      application.id === id ? { ...application, status } : application
    );

    localStorage.setItem("applications", JSON.stringify(updated));
    loadApplications();
  };

  return (
    <div id="industry-applications" className="industry-applications">
      <div id="industry-applications-heading" className="component-heading">
        <h3 id="industry-applications-title">Student Applications</h3>
        <p id="industry-applications-description">Review and update applicants for your opportunities.</p>
      </div>

      {applications.length === 0 ? (
        <p id="industry-applications-empty" className="empty-state">
          No applications found for your opportunities.
        </p>
      ) : (
        <div id="industry-applications-list" className="industry-applications-list">
          {applications.map((application) => (
            <article id={`industry-application-${application.id}`} className="industry-application-card" key={application.id}>
              <div>
                <strong>{application.opportunityTitle}</strong>
                <span>Applicant: {application.applicant}</span>
                <span className="industry-current-status">Status: {application.status}</span>
              </div>

              <div id={`industry-application-actions-${application.id}`} className="industry-application-actions">
                <button
                  id={`industry-shortlist-${application.id}`}
                  className="industry-shortlist-button"
                  onClick={() => updateStatus(application.id, "shortlisted")}
                >
                  Shortlist
                </button>
                <button
                  id={`industry-reject-${application.id}`}
                  className="industry-reject-button"
                  onClick={() => updateStatus(application.id, "rejected")}
                >
                  Reject
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndustryApplications;
