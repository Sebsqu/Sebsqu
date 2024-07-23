import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
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
    <Navbar expand="lg" sticky="top" className='nav'>
      <div className='logo'>Sebastian Skubała</div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link href="#home" onClick={(e) => handleScroll(e, 'home', 80)} style={linkStyle('home')}>Home</Nav.Link>
          <Nav.Link href="#about" onClick={(e) => handleScroll(e, 'about')} style={linkStyle('about')}>About</Nav.Link>
          <Nav.Link href="#projects" onClick={(e) => handleScroll(e, 'projects')} style={linkStyle('projects')}>Projects</Nav.Link>
          <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} style={linkStyle('contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
