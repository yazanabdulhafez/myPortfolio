import React, { Component } from 'react';
import SingleProject from './SingleProject';
import { Container, Row } from 'react-bootstrap';

export class Projects extends Component {
  render() {
    return (
      <>
      <Container>
        <Row>
          
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
    
      </Row>
      </Container>
      </>
    )
  }
}

export default Projects;