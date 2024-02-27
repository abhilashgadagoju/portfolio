import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const showError = (errorMessage) => {
    toast.error(errorMessage, {
      position: 'bottom-right',
      style: {
        bottom: '30px'// Adjust the distance from the bottom
      },
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
  }
  const form = useRef();
  const sendEmail = () => {
    const messageSent = localStorage.getItem('messageSent')
    if (messageSent) {
      showError('Action not allowed. Message already sent.');
      return;
    }
    localStorage.setItem('messageSent', 'true');
    emailjs
      .sendForm("service_o7hf1k3", "template_62ynwy4", form.current, {
        publicKey: 'jJ3rLmZQiYrn1rKyG',
      })
      .then(
        () => {
          toast.success('Message sent Successfully ', {
            position: 'bottom-right',
            style: {
              bottom: '30px'// Adjust the distance from the bottom
            }
          });
        },
        (error) => {
          console.log(error);
          showError('Unable to sent Message ');
        },
      );
    // Allow the method to be called again after one hour
    setTimeout(() => {
      localStorage.removeItem('messageSent');
    }, 3600000); // 3600000 milliseconds = 1 hour
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior page reload
    const formData = {
      name: form.current.recruiter_name.value,
      email: form.current.recruiter_email.value,
      phone: form.current.recruiter_phone.value,
      message: form.current.message.value
    };

    if (formData.name == '') {
      showError('Please enter your name');
      form.current.recruiter_name.classList.add('error-border');
      return;
    } else if (formData.phone == '' || formData.phone.length !== 10) {
      showError('Please enter a valid phone number')
      form.current.recruiter_phone.classList.add('error-border');
      return;
    } else if (formData.email == '' || !/\S+@\S+\.\S+/.test(formData.email)) {
      showError('Please enter a valid email address')
      form.current.recruiter_email.classList.add('error-border');
      return;
    } else if (formData.message == '') {
      showError('Please enter your message')
      form.current.message.classList.add('error-border');
      return;
    } else {
      sendEmail(form);
    }
  };
  const handleInputChange = (e) => {
    e.target.classList.remove('error-border');//remove red border
  };
  return (
    <div className="row justify-content-center" id="contact">
      <div className="col-md-12 col-lg-12">
        <Card  >
          <Card.Header>
            <Card.Title>Contact Me</Card.Title>
            <Card.Text>Enter your information and I'll get back to you.</Card.Text>
          </Card.Header>
          <Card.Body>
            <Form ref={form}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="first-name">Full Name</Form.Label>
                <Form.Control id="first-name" type="text" name="recruiter_name" placeholder="Enter your Full Name"
                  className="highlight-on-focus" onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Phone">Phone number</Form.Label>
                <Form.Control id="Phone" name="recruiter_phone" type="tel" pattern="\d{3}-\d{3}-\d{4}"
                  placeholder="Enter your Phone number" className="highlight-on-focus" onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" type="email" name="recruiter_email" placeholder="Enter your email"
                  className="highlight-on-focus" onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control as="textarea" id="message" name="message" rows={3} placeholder="Enter your message"
                  className="highlight-on-focus" onChange={handleInputChange} required />
              </Form.Group>
              <Button bg="dark" variant="dark" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
