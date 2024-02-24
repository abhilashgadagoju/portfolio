import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://your-backend-api.com/send-email', { email, message })
      .then(response => {
        console.log('Email sent successfully:', response.data);
        // Reset form fields after successful submission
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };

  return (

    <div className="row justify-content-center" id="contact">
      <div className="col-md-12 col-lg-12">

        <Card  >
          <Card.Header>
            <Card.Title>Contact us</Card.Title>
            <Card.Text>Enter your information and we'll get back to you.</Card.Text>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="first-name">First name</Form.Label>
                <Form.Control id="first-name" type="text" placeholder="Enter your first name" className="highlight-on-focus" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="last-name">Last name</Form.Label>
                <Form.Control id="last-name" type="text" placeholder="Enter your last name" className="highlight-on-focus" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" type="email" placeholder="Enter your email" className="highlight-on-focus" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control as="textarea" id="message" rows={3} placeholder="Enter your message" className="highlight-on-focus" />
              </Form.Group>
              <Button bg="dark" variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>



      </div>
    </div>
  );
}

export default Contact;
