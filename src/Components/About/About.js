// components/About.js


import './About.css';
import React, { useEffect, useRef } from 'react';
import ProjectCard from '../Projects/Projects.js';
import Experience from '../Experience/Experience.js';
import Skills from '../Skills/Skills.js';
import { FaGithub } from 'react-icons/fa';
import { aboutMe } from '../../data/userData.js';

function About({ theme }) {
  const badgeRef = useRef(null);

  useEffect(() => {
    // Clean up previous badges and script
    if (badgeRef.current) {
      badgeRef.current.innerHTML = '';
    }
    const oldScript = document.getElementById('linkedin-badge-script');
    if (oldScript) oldScript.remove();

    // Add the light mode badge div
    if (badgeRef.current) {
      const lightBadgeDiv = document.createElement('div');
      lightBadgeDiv.className = 'badge-base LI-profile-badge linkedin-badge-light';
      lightBadgeDiv.setAttribute('data-locale', 'en_US');
      lightBadgeDiv.setAttribute('data-size', 'large');
      lightBadgeDiv.setAttribute('data-theme', 'light');
      lightBadgeDiv.setAttribute('data-type', 'HORIZONTAL');
      lightBadgeDiv.setAttribute('data-vanity', 'abhilashgadagoju');
      lightBadgeDiv.setAttribute('data-version', 'v1');
      badgeRef.current.appendChild(lightBadgeDiv);

      // Add the dark mode badge div
      const darkBadgeDiv = document.createElement('div');
      darkBadgeDiv.className = 'badge-base LI-profile-badge linkedin-badge-dark';
      darkBadgeDiv.setAttribute('data-locale', 'en_US');
      darkBadgeDiv.setAttribute('data-size', 'large');
      darkBadgeDiv.setAttribute('data-theme', 'dark');
      darkBadgeDiv.setAttribute('data-type', 'HORIZONTAL');
      darkBadgeDiv.setAttribute('data-vanity', 'abhilashgadagoju');
      darkBadgeDiv.setAttribute('data-version', 'v1');
      badgeRef.current.appendChild(darkBadgeDiv);
    }

    // Add the LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.id = 'linkedin-badge-script';
    document.body.appendChild(script);

    // Cleanup function to remove script and badges on unmount
    const badgeNode = badgeRef.current;
    return () => {
      if (badgeNode) badgeNode.innerHTML = '';
      const script = document.getElementById('linkedin-badge-script');
      if (script) script.remove();
    };
  }, []); // Remove theme dependency

  const projects = [
    {
      title: "Projects", body: (
        <ul style={{ marginLeft: 0, paddingLeft: 0, listStyleType: 'none' }}>
          <li>
            <a href="https://github.com/abhilashgadagoju/Inventory-management" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaGithub size={25} className="mx-2" />
            </a>
            Inventory API using Spring Boot</li>
          <li>
            <a href="https://github.com/abhilashgadagoju/Project" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaGithub size={25} className="mx-2" />
            </a>
            Government Scheme Alerts</li>
          <li>
            <a href="https://github.com/abhilashgadagoju" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaGithub size={25} className="mx-2" />
            </a>
            Blood Bank Services</li>
        </ul>
      )
    },
    {
      title: "Certificates", body: (
        <ul style={{ textAlign: 'left' }}>
          <li>JAVA, C Certified</li>
          <li>Internship at ECIL</li>
          <li>RedHat Architecting Scalable Cloud</li>
        </ul>
      )
    }
  ];



  return (
    <div className="about-section" >
      <div className="container-fluid" style={{background: 'var(--aboutme-bg)'}}>
        <div className="row" id="about">
          <div className="col-md-12 col-lg-8 wrapper">
            <div className="card" style={{ border: 'none', background: 'var(--aboutme-bg)',color:'var(--text-color)'  }}>
              <h1 className='card-title'>About <span className="me">ME</span></h1>
              <div style={{ display: 'flex', textAlign: 'center' }}>
              </div>
              <p className="card-text" style={{ textAlign: 'justify', textJustify: 'inter-word'}}>
                {aboutMe}
              </p>
              <div className="row">
                <div className="col-md-4">
                  <Experience />
                </div>
                <div className="col-md-8">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4" >
            <div className="container-fluid  " style={{ background: 'var(--aboutme-bg)',border: 'none' }}>

              <div className="row d-flex flex-wrap align-items-left justify-content-left">
                <div ref={badgeRef}></div>


                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    body={project.body}
                  />
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

