import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar bg-black/90 backdrop-blur-sm border-b border-border/50">
      <div className="container flex justify-between items-center h-16 px-4">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <span>DevPortfolio</span>
          </Link>
        </div>
        
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-300'}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-300'}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-300'}`}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-300'}`}
          >
            Skills
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-300'}`}
          >
            Contact
          </NavLink>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-primary/10 text-gray-300 hover:text-white"
            aria-label="Open menu"
          >
            {isOpen ? <TwitterIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/95 border-b border-border/50`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink 
            to="/" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 ${isActive ? 'text-primary' : 'text-gray-300'}`}
            onClick={toggleMenu}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 ${isActive ? 'text-primary' : 'text-gray-300'}`}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 ${isActive ? 'text-primary' : 'text-gray-300'}`}
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 ${isActive ? 'text-primary' : 'text-gray-300'}`}
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 ${isActive ? 'text-primary' : 'text-gray-300'}`}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;