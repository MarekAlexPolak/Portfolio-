import React from "react";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Resume from '../Pages/Resume';

export default function Navigation({currentPage}){
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Resume />;
      };

      return(
        <div>
            {renderPage(currentPage)}
        </div>
      )
}