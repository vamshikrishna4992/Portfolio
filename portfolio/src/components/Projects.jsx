import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "To-Do-Management",
      description: "A To-Do Management app helps users create, manage, and track tasks by allowing them to add, edit, delete, and mark tasks as completed.",
      link: "https://github.com/vamshikrishna4992/To-Do-Management"
    },
    {
      title: "Project 2",
      description: "This is the second project description.",
      link: "https://github.com/vamshikrishna4992/project2"
    },
    {
      title: "Project 3",
      description: "This is the third project description.",
      link: "https://github.com/vamshikrishna4992/project3"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="project-item">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
