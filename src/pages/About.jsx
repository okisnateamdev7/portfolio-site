import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div>👤</div>
          </div>
          <div className="about-text">
            <h2>About Alex Morgan</h2>
            <p>
              I'm a passionate full-stack developer with 5 years of experience building 
              scalable web applications. My journey began with a fascination for how 
              technology can solve real-world problems, and I've been crafting digital 
              experiences ever since.
            </p>
            <p>
              I specialize in modern JavaScript frameworks, particularly React and Node.js, 
              with a strong focus on creating intuitive user interfaces and robust 
              backend systems. When I'm not coding, you'll find me hiking, reading 
              science fiction, or experimenting with new recipes in the kitchen.
            </p>
            <p>
              I believe in clean code, thoughtful design, and continuous learning. 
              Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
