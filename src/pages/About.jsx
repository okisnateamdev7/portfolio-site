import React from 'react';

const About = () => {
  return (
    <section className="about relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#4f46e5]/10 to-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{ left: '10%', top: '20%' }}></div>
        <div className="w-[150px] h-[150px] bg-gradient-to-r from-[#8b5cf6]/8 to-[#06b6d4]/8 rounded-full blur-3xl animate-float-slow" style={{ right: '5%', top: '50%' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Illustration / Visual Element */}
          <div className="relative w-full h-[300px] lg:w-[400px] lg:h-[400px] mx-auto bg-surface/10 rounded-2xl border border-border/50 flex items-center justify-center overflow-hidden">
            {/* Abstract geometric pattern */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#4f46e5]/5 to-[#8b5cf6]/5"></div>
            {/* Circular highlight */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] rounded-full flex items-center justify-center text-white text-sm font-medium">
                <span>AM</span>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I'm a passionate full-stack developer with 5 years of experience building scalable web applications. 
              My journey began with a fascination for how technology can solve real-world problems, and I've been 
              crafting digital experiences ever since.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I specialize in modern JavaScript frameworks, particularly React and Node.js, with a strong focus on 
              creating intuitive user interfaces and robust backend systems. When I'm not coding, you'll find me 
              hiking, reading science fiction, or experimenting with new recipes in the kitchen.
            </p>
            
            {/* Skills/Stats Row */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex flex-col items-center bg-[rgba(79,70,229,0.1)] p-4 rounded-lg w-full md:w-auto">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="flex flex-col items-center bg-[rgba(139,92,246,0.1)] p-4 rounded-lg w-full md:w-auto">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-gray-300">Projects Built</div>
              </div>
              <div className="flex flex-col items-center bg-[rgba(6,182,212,0.1)] p-4 rounded-lg w-full md:w-auto">
                <div className="text-2xl font-bold text-success">20+</div>
                <div className="text-sm text-gray-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;