import React, { useState, useEffect } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // Apply theme to <body>
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle screen resize for mobile toggle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleBtnClass = `toggle-btn btn ${isDark ? 'btn-light' : 'btn-outline-dark'}`;

  return (
    <header className="site-header fixed">
      <div className="header-content">
        <a className="logo-title" href="/">
          <img className="logo" src="/assets/logo.png" alt="MicroCourses logo" />
          Micro<span className="title-courses">Courses</span>
        </a>

        <button
          className={toggleBtnClass}
          onClick={toggleTheme}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isMobile
            ? (isDark ? '☀️' : '🌙')
            : (isDark ? '☀️ Light Mode' : '🌙 Dark Mode')}
        </button>
      </div>
    </header>
  );
};

export default Header;