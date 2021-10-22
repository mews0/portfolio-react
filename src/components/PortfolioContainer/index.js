import React, { useState } from 'react';
import About from '../About';
import Project from '../Project';
import ContactForm from '../Contact';

function PortfolioContainer() {
  // using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About');

  // the renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Project':
        return <Project />;
      case 'ContactForm':
        return <ContactForm />;
      default:
        return <About />;
    }
  };
  
  {/* HOW DO I USE handlePageChange() TO CONDITIONALLY RENDER PAGE BASED ON NAV TAB SELECTED? */}

  return (
    <div>
      {renderPage(currentPage)}
    </div>
  );
}

export default PortfolioContainer;