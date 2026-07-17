import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Portfolio</div>
        <div className="nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
