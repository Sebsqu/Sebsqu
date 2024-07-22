import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e, id, offset = 0) => {
    e.preventDefault();
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -offset;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const linkStyle = (section) => ({
    color: activeSection === section ? 'gold' : 'white',
    borderBottom: activeSection === section ? '1px solid gold' : 'none',
    paddingBottom: '2px',
    transition: 'color 0.5s linear, border-bottom 0.5s linear',
  });

  return (
    <nav>
      <div className='logo'>
          Sebastian Skubała
      </div>
        <div className='nav'>
          <ul>
              <li><a href='#home' onClick={(e) => handleScroll(e, 'home', 80)}  style={linkStyle('home')} >Home</a></li>
              <li><a href='#about' onClick={(e) => handleScroll(e, 'about')}  style={linkStyle('about')} >About</a></li>
              <li><a href='#projects' onClick={(e) => handleScroll(e, 'projects')} style={linkStyle('projects')} >Projects</a></li>
              <li><a href='#contact' onClick={(e) => handleScroll(e, 'contact')}  style={linkStyle('contact')} >Contact</a></li>
          </ul>
      </div>
    </nav>
  );
};

export default Nav;
