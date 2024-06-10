// components/About.js


import './About.css';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../Projects/Projects.js';
import Experience from '../Experience/Experience.js';
import Skills from '../Skills/Skills.js';
import { FaGithub } from 'react-icons/fa';
import { aboutMe } from '../../data/userData.js'

function About() {
  const projects = [
    {
      title: "Projects", body: (
        <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
          <li>
            <a href="https://github.com/abhilashgadagoju/Inventory-management" target="_blank" rel="noopener noreferrer" className="my-link mx-2">
              <FaGithub size={25} className="mx-2" />
            </a>
            Inventory API using JAVA Spring Boot</li>
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
          <li>RedHat Certified Architecting Scalable Cloud</li>
          <li>AWS Cloud Practitioner</li>
        </ul>
      )
    }
  ];



  return (
    <div className="about-section" >
      <div className="container-fluid">
        <div className="row" id="about">
          <div className="col-md-12 col-lg-8 wrapper">
            <div className="card" style={{ border: 'none' }}>
              <h1 className='card-title'>About <span className="me">ME</span></h1>
              <div style={{ display: 'flex', textAlign: 'center' }}>
              </div>
              <p className="card-text" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
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
            <div className="container-fluid  " style={{ border: 'none' }}>

              <div className="row d-flex flex-wrap align-items-center justify-content-center">
                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="abhilashgadagoju" data-version="v1">
                  <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/abhilashgadagoju?trk=profile-badge"></a>
                </div>


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

