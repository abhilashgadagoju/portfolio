import React from 'react';
import { experience } from '../../data/userData.js'
import './Experience.css';

function Experience() {

  return (
    <div className="card experience-section" style={{ border: 'none', background: 'var(--aboutme-bg)',color:'var(--text-color)' }}>
      <p className='title' >Experience </p>
      {experience.map((exp, index) => (
        <div key={index}>
          <p>
            <span className="role">{exp.role}</span><br />
            <span className="company">{exp.company}</span><br />
            <span className="dates">{exp.dates}</span>
          </p>
        </div>
      ))}
    </div>

  );
}

export default Experience;
