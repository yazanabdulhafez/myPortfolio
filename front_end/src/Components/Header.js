import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <> 
      
      <Navbar bg="primary" variant="dark">
          <Container style={{ justifyContent: "space-between" }}>
            <div>
              <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            </div>
            <div>
              <Nav className="me-auto" style={{ gap: "30px" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="Education">Education</Nav.Link>
                <Nav.Link href="Projects">Projects</Nav.Link>
                <Nav.Link href="Contact">Contact</Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>

      </>
    )
  }
}

export default Header