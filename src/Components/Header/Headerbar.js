import React from 'react';
import './HeaderBar.css';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import resumePdf from '../../data/Resume_Abhilash.pdf';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeaderNav({ theme, toggleTheme }) {

  const handleDownload = () => {
    // Replace 'resume.pdf' with the path to your resume PDF file
    window.open(resumePdf, '_blank');
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="md" className="border-bottom px-4 md:px-6">
      <Container fluid className="h-100 d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#" className="mx-auto">
          <span
            style={{
              fontFamily: 'Dancing Script, cursive',
              fontSize: 36,
              background: 'linear-gradient(to right, #0080ff, #e600ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              lineHeight: 1,
              minWidth: 92,
              textAlign: 'center',
              fontWeight: 700
            }}
          >
            Abhilash
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Nav.Link href="#" style={{ color: 'var(--text-color)', fontWeight: 'bold' }} >
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
            <Nav.Link href="#" style={{ color: 'var(--text-color)', fontWeight: 'bold' }} >
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
            <Nav.Link href="#" style={{ color: 'var(--text-color)', fontWeight: 'bold' }}>
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
          <Form className="mx-2" style={{ display: 'flex', alignItems: 'center', padding: 0, margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Check
                type="switch"
                id="theme-switch"
                label=""
                checked={theme === 'dark'}
                onChange={toggleTheme}
                style={{ marginBottom: 0}}
              />
              <span style={{ marginLeft: '0.75rem',  alignItems: 'center',fontWeight: 'bold', color: 'var(--text-color)', lineHeight: 1 }}>
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
          </Form>
          <Button
            bg="dark"
            variant="dark"
            onClick={handleDownload}
            className="mx-2"
            style={theme === 'dark' ? { border: '2px solid #fff' } : {}}
          >
            Resume
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
