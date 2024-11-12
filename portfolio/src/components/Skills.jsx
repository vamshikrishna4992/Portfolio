import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
    { name: "Git", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2>{skill.name}</h2>
            <p>Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
