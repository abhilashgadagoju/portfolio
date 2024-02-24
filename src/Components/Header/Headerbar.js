import React from 'react';
import './HeaderBar.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import resumePdf from '../../data/Abhilash_FullStack_Developer.pdf';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeaderNav() {

  const handleDownload = () => {
    // Replace 'resume.pdf' with the path to your resume PDF file
    window.open(resumePdf, '_blank');
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar bg="light" variant="light" expand="md" className="border-bottom px-4 md:px-6">
      <Container fluid className="h-100 d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#" className="mx-auto">
          <img
            alt="Abhi"
            height="32"
            src="/signature.png"
            style={{
              width: "92px",
              height: "32px"
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mx-auto">
            <Nav.Link href="#" style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }} >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#" style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }} >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#" style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          <Button bg="dark" variant="dark" type="submit" onClick={handleDownload}>Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
