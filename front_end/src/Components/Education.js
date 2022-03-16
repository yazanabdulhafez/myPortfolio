import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';

export class Education extends Component {
  render() {
    return (
      <>
      <div>Education</div>
      <ListGroup style={{justifyContent:"space-around"}}>

  <ListGroup.Item action variant="success" style={{ width: '40rem',height: "15rem", margin:"10px" }}>
  Software development ASAC/LTUC 05.2021-12.2021
  </ListGroup.Item>
  <ListGroup.Item action variant="success" style={{ width: '40rem',height: "15rem", margin:"10px" }}>
  Electrical Engineering University of Jordan 09.2012-07.2017
  </ListGroup.Item>
  <ListGroup.Item action variant="success" style={{ width: '40rem',height: "15rem", margin:"10px" }}>
  Tawjihi Albuqea secondary school for boys 09.2011-07.2012
  </ListGroup.Item>
</ListGroup>
</>
    )
  }
}

export default Education;