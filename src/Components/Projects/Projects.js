import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './Projects.css';

// App component
const ProjectCard = ({ title, body }) => {
  return (
    <div className="col-md-6 col-lg-12 mt-1 mb-1 me-md-1 ms-md-1">
      <Card className="project-card">
        <Card.Header style={{ background: 'var(--card-header-bg)', color:'var(--text-color)' }}>{title}</Card.Header>
        <Card.Body className="project-card-body" style={{ background: 'var(--card-body-bg)', color:'var(--text-color)', textAlign: 'left' }}>{body}</Card.Body>
      </Card><br /></div>
  );
};

export default ProjectCard;
