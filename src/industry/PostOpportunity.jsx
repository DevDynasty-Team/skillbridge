import React, { useState } from "react";
import "./PostOpportunity.css";

const PostOpportunity = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const opportunities = JSON.parse(localStorage.getItem("opportunities") || "[]");
    const company = localStorage.getItem("companyName") || localStorage.getItem("userName") || "Demo Company";

    const newOpportunity = {
      id: Date.now(),
      title: title.trim(),
      desc: desc.trim(),
      description: desc.trim(),
      skills: skills.split(",").map((skill) => skill.trim()).filter(Boolean),
      postedBy: company
    };

    localStorage.setItem(
      "opportunities",
      JSON.stringify([newOpportunity, ...opportunities])
    );

    setTitle("");
    setDesc("");
    setSkills("");
    setMessage("Opportunity posted successfully.");
  };

  return (
    <div id="post-opportunity" className="post-opportunity">
      <div id="post-opportunity-heading" className="component-heading">
        <h3 id="post-opportunity-title">Post Internship / Job</h3>
        <p id="post-opportunity-description">Add an opportunity for students to discover.</p>
      </div>

      <form id="post-opportunity-form" className="post-opportunity-form" onSubmit={submit}>
        <div id="post-title-group" className="post-field">
          <label htmlFor="post-title">Title</label>
          <input id="post-title" className="post-input" value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Frontend Developer Intern" required />
        </div>

        <div id="post-description-group" className="post-field">
          <label htmlFor="post-description">Description</label>
          <textarea id="post-description" className="post-textarea" value={desc}
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Describe the role and responsibilities" required />
        </div>

        <div id="post-skills-group" className="post-field">
          <label htmlFor="post-skills">Required Skills</label>
          <input id="post-skills" className="post-input" value={skills}
            onChange={(event) => setSkills(event.target.value)}
            placeholder="React, JavaScript, Communication" />
        </div>

        <button id="post-opportunity-submit" className="component-primary-button" type="submit">
          Post Opportunity
        </button>
      </form>

      {message && <p id="post-opportunity-message" className="post-message">{message}</p>}
    </div>
  );
};

export default PostOpportunity;
