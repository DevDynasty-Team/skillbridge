import React, { useEffect, useState } from "react";
import "./StudentApplications.css";

const StudentApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const allApplications = JSON.parse(localStorage.getItem("applications") || "[]");
    const user = localStorage.getItem("userName") || "Demo Student";
    setApplications(allApplications.filter((application) => application.applicant === user));
  }, []);

  return (
    <div id="student-applications" className="student-applications">
      <div id="student-applications-heading" className="component-heading">
        <h3 id="student-applications-title">My Applications</h3>
        <p id="student-applications-description">Track the status of your submitted applications.</p>
      </div>

      {applications.length === 0 ? (
        <p id="student-applications-empty" className="empty-state">
          You have not applied to any opportunity yet.
        </p>
      ) : (
        <div id="student-applications-list" className="student-applications-list">
          {applications.map((application) => (
            <article id={`student-application-${application.id}`} className="student-application-card" key={application.id}>
              <div>
                <strong>{application.opportunityTitle}</strong>
                <span>Applicant: {application.applicant}</span>
              </div>
              <span className={`application-status status-${application.status}`}>
                {application.status}
              </span>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentApplications;
