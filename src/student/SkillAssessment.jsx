import React, { useState } from "react";
import "./SkillAssessment.css";

const questions = [
  { id: 1, name: "JavaScript", text: "Rate your JavaScript skill (1-5)" },
  { id: 2, name: "React", text: "Rate your React skill (1-5)" },
  { id: 3, name: "Communication", text: "Rate your Communication skill (1-5)" }
];

const SkillAssessment = () => {
  const [answers, setAnswers] = useState(() =>
    JSON.parse(localStorage.getItem("studentProfile") || "null")
      ? Object.fromEntries(
          JSON.parse(localStorage.getItem("studentProfile")).map((item, index) => [index + 1, String(item.score)])
        )
      : {}
  );
  const [profile, setProfile] = useState(() =>
    JSON.parse(localStorage.getItem("studentProfile") || "null")
  );

  const handleChange = (id, value) => {
    setAnswers((previous) => ({ ...previous, [id]: value }));
  };

  const submit = (event) => {
    event.preventDefault();

    const skills = questions.map((question) => ({
      name: question.name,
      score: Number(answers[question.id] || 0)
    }));

    setProfile(skills);
    localStorage.setItem("studentProfile", JSON.stringify(skills));
  };

  return (
    <div id="skill-assessment" className="skill-assessment">
      <div id="skill-assessment-heading" className="component-heading">
        <h3 id="skill-assessment-title">Skill Assessment</h3>
        <p id="skill-assessment-description">Rate your current skills from 1 to 5.</p>
      </div>

      <form id="skill-assessment-form" className="assessment-form" onSubmit={submit}>
        {questions.map((question) => (
          <div id={`skill-question-${question.id}`} className="skill-question" key={question.id}>
            <label id={`skill-question-label-${question.id}`} htmlFor={`skill-score-${question.id}`}>
              {question.text}
            </label>
            <input
              id={`skill-score-${question.id}`}
              className="skill-score-input"
              type="number"
              min="1"
              max="5"
              value={answers[question.id] || ""}
              onChange={(event) => handleChange(question.id, event.target.value)}
              required
            />
          </div>
        ))}

        <button id="skill-assessment-submit" className="component-primary-button" type="submit">
          Save Assessment
        </button>
      </form>

      {profile && (
        <div id="skill-profile-result" className="skill-profile-result">
          <h4 id="skill-profile-title">Your Skill Profile</h4>
          <div id="skill-profile-list" className="skill-profile-list">
            {profile.map((skill) => (
              <div id={`skill-result-${skill.name.toLowerCase()}`} className="skill-profile-item" key={skill.name}>
                <span>{skill.name}</span>
                <strong>{skill.score}/5</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillAssessment;
