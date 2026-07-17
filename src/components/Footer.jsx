import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>© {new Date().getFullYear()} Portfolio. All rights reserved.</div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
