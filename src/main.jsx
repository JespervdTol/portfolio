import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Project from './NewPage.jsx';

function Root() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Store scroll position when page changes
  useEffect(() => {
    if (currentPage === "Home") {
      const handleScroll = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  // Restore scroll position when navigating back to home
  useEffect(() => {
    if (currentPage === "Home") {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
      }
    }
  }, [currentPage]);

  return (
    <React.StrictMode>
      {currentPage === "Home" ? <App setCurrentPage={setCurrentPage} currentPage={currentPage}/> : <Project setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
