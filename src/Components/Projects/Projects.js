import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

// App component
const ProjectCard = ({ title, body }) => {
  return (
    <div className="col-md-6 col-lg-12 mt-2 mb-2 mr-md-2 ml-md-2">
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card><br /></div>
  );
};

export default ProjectCard;
