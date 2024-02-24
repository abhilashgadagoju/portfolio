import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub  } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <Navbar bg="white" variant="light" expand="md" className="border-top px-4">
    <Container className="d-md-flex flex-wrap">
      <Navbar.Text className="mb-2 mb-md-0">© {new Date().getFullYear()} Abhilash</Navbar.Text>
      <Nav className="d-flex flex-wrap ">
      <Container className="d-md-flex flex-wrap">
        <Nav.Link href="#" className="text-dark font-weight-bold mx-2">
          <FaInstagram />
        </Nav.Link>
        <Nav.Link href="https://github.com/abhilashgadagoju" className="text-dark font-weight-bold mx-2">
          <FaGithub />
        </Nav.Link>
        <Nav.Link href="#" className="text-dark font-weight-bold mx-2">
          <FaYoutube />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/abhilashk9832/" className="text-dark font-weight-bold mx-2">
          <FaLinkedin />
        </Nav.Link>
        <Nav.Link href="https://wa.me/18322211196" className="text-dark font-weight-bold mx-2">
          <FaWhatsapp />
        </Nav.Link>
        <Nav.Link href="mailto:abhilashg716@gmail.com" className="text-dark font-weight-bold mx-2 ">
          <FaEnvelope />
        </Nav.Link>
        </Container>
      </Nav>
      <Button bg="dark" variant="dark" className="mt-3 mt-md-0">Contact Us</Button>
    </Container>
  </Navbar>
  );
}

export default Footer;
