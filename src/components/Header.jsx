import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="site-header fixed">
      <div className="header-content">
        <Link to="/" className="logo-title">
          <img src="/assets/logo.png" alt="MicroCourses logo" className="logo" />
          <span>Micro</span>
          <span className="title-courses">Courses</span>
        </Link>
        <button
          className="toggle-btn"
          onClick={toggleTheme}
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {isMobile ? (theme === 'light' ? '🌙' : '☀️') : (theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode')}
        </button>
      </div>
    </header>
  );
};

export default Header;
