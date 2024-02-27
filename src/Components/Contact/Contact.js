import React, { useState, useRef, useMemo } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {


  const form = useRef();

  let canCallMethod = true;


  const sendEmail = () => {
    if (!canCallMethod) {
      console.log('Method is currently restricted.');
      return;
    }

    // Set the flag to prevent further calls
    canCallMethod = false;

    emailjs
      .sendForm("service_o7hf1k3", "template_62ynwy4", form.current, {
        publicKey: 'jJ3rLmZQiYrn1rKyG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // Allow the method to be called again after one hour
    setTimeout(() => {
      canCallMethod = true;
      console.log('Method can be called again.');
    }, 3600000); // 3600000 milliseconds = 1 hour



  }


  const handleSubmit = (e) => {

    e.preventDefault(); // Prevent the default form submission behavior

    const formData = {
      name: form.current.recruiter_name.value,
      email: form.current.recruiter_email.value,
      phone: form.current.recruiter_phone.value,
      message: form.current.message.value
    };

    if (formData.name == '') {
      console.log('name...');
    } else if (formData.message == '') {
      console.log('message...');
    } else if (formData.phone == '') {
      console.log('phone...');
    } else if (formData.email == '') {
      console.log('email...');
    } else {
      sendEmail(form);
    }


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
            <Form ref={form}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="first-name">Full Name</Form.Label>
                <Form.Control id="first-name" type="text" name="recruiter_name" placeholder="Enter your Full Name" className="highlight-on-focus" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="last-name">Phone number</Form.Label>
                <Form.Control id="last-name" name="recruiter_phone" type="tel" pattern="\d{3}-\d{3}-\d{4}" placeholder="Enter your Phone number" className="highlight-on-focus" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" type="email" name="recruiter_email" placeholder="Enter your email" className="highlight-on-focus" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control as="textarea" id="message" name="message" rows={3} placeholder="Enter your message" className="highlight-on-focus" required />
              </Form.Group>
              <Button bg="dark" variant="dark" type="submit" onClick={handleSubmit}>
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
