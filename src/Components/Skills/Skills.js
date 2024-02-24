import React from 'react';
import './Skills.css';
import { skills } from '../../data/userData.js'


function Skills() {



    return (
        <div className="card skills-section" style={{ border: 'none' }}>
            <p className='title'>What Skills I Have</p>
            {skills.map((skill, index) => (
                <div key={index}>
                    <p>
                        <span className="role">{skill.title}</span><br />
                        {skill.technologies.map((technology, techIndex) => (
                            <span className="highlight" key={techIndex}>{technology}</span>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
