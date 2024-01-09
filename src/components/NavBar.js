import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarBackground('#b0aeae'); // Change to your desired background color
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
      className="justify-content-center mx-auto"
      expand="md"
      style={{ backgroundColor: navbarBackground, transition: 'background-color 0.3s' }}
      fixed="top"
      
    >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">


      <Nav className="ml-auto" >
        <Nav.Link href="#home"  className="nav-link custom-nav-link">Home</Nav.Link>
        <Nav.Link href="#gettingThere"  className="nav-link custom-nav-link">Getting There</Nav.Link>
        <Nav.Link href="#wedding"  className="nav-link custom-nav-link">Wedding</Nav.Link>
        <Nav.Link href="#preparing"  className="nav-link custom-nav-link">Preparing </Nav.Link>
        <Nav.Link href="#about"  className="nav-link custom-nav-link">About</Nav.Link>
        <Nav.Link href="#contact"  className="nav-link custom-nav-link">Contact</Nav.Link>
        <Nav.Link href="#faq"  className="nav-link custom-nav-link">FAQs</Nav.Link>

      </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default CustomNavbar;
