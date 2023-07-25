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
    <div>
      <Header currentPage={currentPage} handlePageChange={handleNavigation} />
      <main>
        <Navigation currentPage={currentPage} />
          
      </main>
      <Footer />
    </div>
  );
};
