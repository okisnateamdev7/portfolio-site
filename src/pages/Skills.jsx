import React from 'react';
import { Code, Database, Wrench, Palette, Globe, Server, Terminal, GitBranch, Figma } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "Vue.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Testing Library", "Vercel", "Firebase"]
    },
    {
      title: "Design & UX",
      icon: Figma,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Accessibility", "Responsive Design"]
    }
  ];

  return (
    <section className="skills relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#4f46e5]/10 to-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{ left: '10%', top: '10%' }}></div>
        <div className="w-[150px] h-[150px] bg-gradient-to-r from-[#8b5cf6]/8 to-[#06b6d4]/8 rounded-full blur-3xl animate-float-slow" style={{ right: '5%', bottom: '10%' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-surface/30 rounded-xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;