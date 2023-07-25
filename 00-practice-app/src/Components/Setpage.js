import React, { useState } from 'react';

export default function Setpage () {
  const [currentPage, setCurrentPage] = useState('About');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <button onClick={() => handleNavigation('AboutMe')}>About Me</button>
        <button onClick={() => handleNavigation('Projects')}>Projects</button>
        <button onClick={() => handleNavigation('Contact')}>Contact</button>
      </nav>
      <div>
        {/* Conditional rendering based on the currentPage */}
        {currentPage === 'AboutMe' && <p>This is the About Me page.</p>}
        {currentPage === 'Projects' && <p>This is the Projects page.</p>}
        {currentPage === 'Contact' && <p>This is the Contact page.</p>}
      </div>
    </div>
  );
};
