import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-black/90 border-t border-border/50 py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/alexmorgan-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/alexmorgan-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:alex.morgan@example.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;