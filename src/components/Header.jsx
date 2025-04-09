import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="site-header fixed">
      <div className="header-content">
        <Link to="/" className="logo-title">
          <img src="/assets/logo.png" alt="MicroCourses logo" className="logo" />
          <span>MicroCourses</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
