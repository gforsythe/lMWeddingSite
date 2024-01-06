import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarBackground('#e0e0e0'); // Change to your desired background color
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className="justify-content-center"
      expand="md"
      style={{ backgroundColor: navbarBackground, transition: 'background-color 0.3s' }}
      fixed="top"
      
    >
      <Nav className="ml-auto" >
        <Nav.Link href="#home"  className="nav-link custom-nav-link">Home</Nav.Link>
        <Nav.Link href="#travel"  className="nav-link custom-nav-link">Getting There</Nav.Link>
        <Nav.Link href="#wedding"  className="nav-link custom-nav-link">Wedding</Nav.Link>
        <Nav.Link href="#preparing"  className="nav-link custom-nav-link">Preparing </Nav.Link>
        <Nav.Link href="#about"  className="nav-link custom-nav-link">About</Nav.Link>
        <Nav.Link href="#contact"  className="nav-link custom-nav-link">Contact</Nav.Link>
        <Nav.Link href="#faq"  className="nav-link custom-nav-link">FAQs</Nav.Link>

      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
