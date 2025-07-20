import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub  } from 'react-icons/fa';
import './Footer.css';
function Footer({ theme }) {
  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="md" className="border-top px-4">
    <Container className="d-md-flex flex-wrap" style={{background:'var(--bg-color)'}}>
      <Navbar.Text className="mb-2 mb-md-0" style={{ color: 'var(--text-color)' }}>© {new Date().getFullYear()} Abhilash</Navbar.Text>
      <Nav className="d-flex flex-wrap ">
      <Container className="d-md-flex flex-wrap" style={{background:'var(--bg-color)'}}>
        <Nav.Link href="#" className="font-weight-bold mx-2">
          <FaInstagram style={{ color: 'var(--text-color)' }} />
        </Nav.Link>
        <Nav.Link href="https://github.com/abhilashgadagoju" className="font-weight-bold mx-2">
          <FaGithub style={{ color: 'var(--text-color)' }} />
        </Nav.Link>
        <Nav.Link href="#" className="font-weight-bold mx-2">
          <FaYoutube style={{ color: 'var(--text-color)' }} />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/abhilashk9832/" className="font-weight-bold mx-2">
          <FaLinkedin style={{ color: 'var(--text-color)' }} />
        </Nav.Link>
        <Nav.Link href="https://wa.me/18322211196" className="font-weight-bold mx-2">
          <FaWhatsapp style={{ color: 'var(--text-color)' }} />
        </Nav.Link>
        <Nav.Link href="mailto:abhilashg716@gmail.com" className="font-weight-bold mx-2 ">
          <FaEnvelope style={{ color: 'var(--text-color)' }} />
        </Nav.Link>
        </Container>
      </Nav>
      <Button
        style={{
          background: 'var(--card-bg)',
          color: 'var(--text-color)',
          border: '1px solid var(--text-color)'
        }}
        className="mt-3 mt-md-0"
      >
        Contact Us
      </Button>
    </Container>
  </Navbar>
  );
}

export default Footer;
