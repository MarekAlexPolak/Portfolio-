import React from "react";

function Header({ currentPage, handleNavigation }) {
  const doubledFontSize = {
    fontSize: '2rem', // Set the font size to double the original size
  };

  const headerStyle = {
    ...doubledFontSize,
    padding: '1rem', // Add padding to all sides of the header
  };

  return (
    <div className="d-flex justify-content-between" style={headerStyle}>
      <span>Marek Polak</span>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handleNavigation('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handleNavigation('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handleNavigation('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handleNavigation('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;