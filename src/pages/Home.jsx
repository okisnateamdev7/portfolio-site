import React from 'react';
import { GitHub, LinkedIn, Mail, X } from 'lucide-react';

const Home = () => {
  return (
    <section className="home relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-90"></div>
      {/* Subtle moving blob effect */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] bg-gradient-to-r from-[#4f46e5]/20 to-[#8b5cf6]/20 rounded-full blur-3xl animate-float" style={{ left: '10%', top: '20%' }}></div>
        <div className="w-[300px] h-[300px] bg-gradient-to-r from-[#8b5cf6]/15 to-[#06b6d4]/15 rounded-full blur-3xl animate-float-slow" style={{ right: '5%', top: '40%' }}></div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center min-h-[100vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-white">Alex Morgan</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Full-stack developer & AI enthusiast building scalable web applications with a focus on performance, accessibility, and clean architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/alexmorgan-dev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <GitHub className="h-5 w-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/alexmorgan-dev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <LinkedIn className="h-5 w-5" /> LinkedIn
            </a>
            <a href="https://x.com/alexmorgan_dev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <X className="h-5 w-5" /> X
            </a>
            <a href="mailto:alex.morgan@example.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5" /> Email
            </a>
          </div>
          <a href="#projects" className="btn btn-primary">Explore My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Home;