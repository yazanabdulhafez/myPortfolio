import React, { Component } from 'react';
import { Button, Card,Col} from 'react-bootstrap';

export class SingleProject extends Component {
  render() {
    return (
      <>
      <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</>

    )
  }
}

export default SingleProject;