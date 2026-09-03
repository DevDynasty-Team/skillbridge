import React, { useEffect, useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("portfolio") || "[]"));
    setSkills(JSON.parse(localStorage.getItem("studentProfile") || "[]"));
  }, []);

  const addItem = (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      title: title.trim(),
      desc: description.trim()
    };

    const updated = [newItem, ...items];
    setItems(updated);
    localStorage.setItem("portfolio", JSON.stringify(updated));
    setTitle("");
    setDescription("");
  };

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("portfolio", JSON.stringify(updated));
  };

  const clearAll = () => {
    if (!window.confirm("Delete all portfolio items?")) return;
    setItems([]);
    localStorage.setItem("portfolio", JSON.stringify([]));
  };

  return (
    <div id="student-portfolio" className="student-portfolio">
      <div id="portfolio-heading" className="component-heading">
        <h3 id="portfolio-title">Digital Portfolio</h3>
        <p id="portfolio-description">Showcase projects and achievements.</p>
      </div>

      <form id="portfolio-form" className="portfolio-form" onSubmit={addItem}>
        <div id="portfolio-title-field" className="portfolio-field">
          <label htmlFor="portfolio-project-title">Project Title</label>
          <input
            id="portfolio-project-title"
            className="portfolio-input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. SkillBridge Portal"
            required
          />
        </div>

        <div id="portfolio-description-field" className="portfolio-field">
          <label htmlFor="portfolio-project-description">Description / GitHub Link</label>
          <textarea
            id="portfolio-project-description"
            className="portfolio-textarea"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe the project or add its link"
            required
          />
        </div>

        <button id="portfolio-add-button" className="component-primary-button" type="submit">
          Add to Portfolio
        </button>
      </form>

      {skills.length > 0 && (
        <section id="portfolio-skills" className="portfolio-section">
          <h4 id="portfolio-skills-title">Skill Profile</h4>
          <div id="portfolio-skills-list" className="portfolio-skills-list">
            {skills.map((skill) => (
              <span id={`portfolio-skill-${skill.name.toLowerCase()}`} className="portfolio-skill" key={skill.name}>
                {skill.name}: {skill.score}/5
              </span>
            ))}
          </div>
        </section>
      )}

      <section id="portfolio-items-section" className="portfolio-section">
        <div id="portfolio-items-heading" className="portfolio-items-heading">
          <h4 id="portfolio-items-title">Projects & Achievements</h4>
          {items.length > 0 && (
            <button id="portfolio-clear-button" className="portfolio-clear-button" onClick={clearAll}>
              Delete All
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p id="portfolio-empty" className="empty-state">No projects added yet.</p>
        ) : (
          <div id="portfolio-items-list" className="portfolio-items-list">
            {items.map((item) => (
              <article id={`portfolio-item-${item.id}`} className="portfolio-item" key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
                <button
                  id={`portfolio-delete-${item.id}`}
                  className="portfolio-delete-button"
                  onClick={() => removeItem(item.id)}
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
