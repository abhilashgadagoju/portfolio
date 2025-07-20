// HomeSection.js
import profileImage from './Home.jpg'; // Import your profile image
// HomeSection.js
import React from 'react';
import './HomeSection.css';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import Keywords from '../Keywords/Keywords';
import { roles, greeting, contactInfo } from '../../data/userData'

const HomeSection = () => {
  //const emailAddress = 'abhilashg716@gmail.com';
  const [displayIndex, setDisplayIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setDisplayText('');
    }, 3000); // Change role every 5 seconds

    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000); // Stop changing roles after 1 minute

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const currentRole = roles[displayIndex];

    const startTypingAnimation = () => {
      typingInterval = setInterval(() => {
        const newDisplayText = currentRole.substring(0, charIndex + 1);

        charIndex++;
        if (newDisplayText === currentRole) {
          clearInterval(typingInterval);
        }
        setDisplayText(newDisplayText);
      }, 50); // Adjust typing speed as needed
    };

    if (charIndex === 0) {
      startTypingAnimation();
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [displayIndex]);

  return (
    <div className="home-section">
      <div className="container" id="home">
        <div className="row">
          <div className="col-xs-8 col-md-8">
            <h1 className="typing-text">{displayText}</h1><br />
            <p>{greeting}</p>
            <a href="https://github.com/abhilashgadagoju" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaGithub size={30} className="mx-2" />
            </a>

            <a href="https://www.linkedin.com/in/abhilashk9832/" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaLinkedin size={30} className="mx-2" />
            </a>

            <a href="https://wa.me/18322211196" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaWhatsapp size={30} className="mx-2" />
            </a>
            <a href="mailto:abhilashg716@gmail.com" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaEnvelope size={30} className="mx-2" />
            </a>
            <br /> <br />
            <p>{contactInfo.email} | {contactInfo.number}</p>
            <br /> <br />
            <p style={{ fontWeight: 'bold' }}>Tech Stack |


              <FontAwesomeIcon icon={faJava} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faReact} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faAws} size="2x" className="mx-2" /> </p>

          </div>
          <div className="col-xs-4 col-md-4">
            <div className="profile-image">
              <img src={profileImage} alt="Abhilash" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <Keywords />
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomeSection;