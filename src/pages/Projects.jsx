import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TaskFlow Pro",
      description: "A collaborative task management application with real-time updates, built with React, Node.js, and WebSocket technology.",
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
      github: "https://github.com/alexmorgan-dev/taskflow-pro",
      demo: "https://taskflow-pro.vercel.app"
    },
    {
      id: 2,
      title: "PhotoGallery",
      description: "A beautiful photo portfolio website with filtering, lightbox, and responsive grid layout.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      github: "https://github.com/alexmorgan-dev/photogallery",
      demo: "https://photogallery.netlify.app"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "An admin dashboard for visualizing business metrics with charts, filters, and export capabilities.",
      tech: ["Vue.js", "D3.js", "Express.js", "MongoDB"],
      github: "https://github.com/alexmorgan-dev/analytics-dashboard",
      demo: "https://analytics-dashboard.firebaseapp.com"
    }
  ];

  return (
    <section className="projects relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#4f46e5]/10 to-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{ left: '5%', top: '10%' }}></div>
        <div className="w-[150px] h-[150px] bg-gradient-to-r from-[#8b5cf6]/8 to-[#06b6d4]/8 rounded-full blur-3xl animate-float-slow" style={{ right: '5%', bottom: '10%' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">My Projects</h2>
        <div className="projects-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden bg-surface/30 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                {/* Project thumbnail with tech icon */}
                <div className="relative h-48 w-full bg-gradient-to-br from-[#4f46e5]/10 to-[#8b5cf6]/10 flex items-center justify-center">
                  <div className="text-2xl font-mono text-primary/70">{project.tech[0].charAt(0)}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm hover:bg-primary/10">
                      GitHub <span className="ml-2">↗</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm hover:bg-secondary/10">
                      Live Demo <span className="ml-2">↗</span>
                    </a>
                  </div>
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