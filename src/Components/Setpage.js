import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

export default function Setpage () {
  const [currentPage, setCurrentPage] = useState('About');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class = "fullpage">
      <Header currentPage={currentPage} handleNavigation={handleNavigation} />
      <main>
        <Navigation currentPage={currentPage} />
          
      </main>
      <Footer />
    </div>
  );
};
