import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TaskFlow Pro",
      description: "A collaborative task management application with real-time updates, built with React, Node.js, and WebSocket technology.",
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
      github: "https://github.com/username/taskflow-pro",
      demo: "https://taskflow-pro.example.com"
    },
    {
      id: 2,
      title: "PhotoGallery",
      description: "A beautiful photo portfolio website with filtering, lightbox, and responsive grid layout.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      github: "https://github.com/username/photogallery",
      demo: "https://photogallery.example.com"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "An admin dashboard for visualizing business metrics with charts, filters, and export capabilities.",
      tech: ["Vue.js", "D3.js", "Express.js", "MongoDB"],
      github: "https://github.com/username/analytics-dashboard",
      demo: "https://analytics-dashboard.example.com"
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div>{project.tech[0]}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub <span aria-label="external link">↗</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo <span aria-label="external link">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
