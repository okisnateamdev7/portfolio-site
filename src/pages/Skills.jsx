import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-list">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Vue.js</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Bootstrap 5</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-list">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">REST API</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & DevOps</h3>
            <div className="skill-list">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Jest</span>
              <span className="skill-tag">Testing Library</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Design & UX</h3>
            <div className="skill-list">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Adobe XD</span>
              <span className="skill-tag">Wireframing</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">User Research</span>
              <span className="skill-tag">Accessibility</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
