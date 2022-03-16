import React, { Component } from 'react';
import {Container, Button, Card, Row, Col } from "reactstrap";
import Img from '../Assets/yazan.jpg';
import Project from './SingleProject';
import SimpleFooter from './SimpleFooter';

export class Home extends Component {

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
       

        {/* <Card bg="info" style={{ width: '90%' }} className="mb-2">
          
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> */}


        <main className="profile-page" ref="main"  >
<Container style={{display:"flex",flexDirection:"row"}}>
          <Container>
            <Card className="card-profile shadow mt--100" >
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={Img}
                          width="500px"
                          height="500px"
                        />
                      </a>
                    </div>
                  </Col>
                  </Row>
                </div>
            </Card>
          </Container>
          <section className="section">
            <Container style={{ marginTop: "20px" }}>
              <Card className="card-profile shadow mt--100" >
                <div className="px-4">
                  <Row className="justify-content-center">
        
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          size="sm"
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault()
                            window.open(
                              "https://www.linkedin.com/in/yazan-alkharabsheh"
                            );
                          }}
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          size="sm"
                          onClick={(e) => {

                            e.preventDefault()
                            window.open(
                              "https://drive.google.com/file/d/1QTVFAD3ghqdJQePTI8YuqyiS0mWm_QkZ/view?usp=sharing"
                            );
                          }}

                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">4</span>
                          <span className="description">Courses</span>
                        </div>
                        <div>
                          <span className="heading">+13</span>
                          <span className="description">Projects</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Yazan Alkharabsheh{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Al-salt,Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      ASAC
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Starting a new path after a great experience at electrical engineering
                          and working in the private sector for two years as electrical technician,
                          so I hope that my dreams come true and become a great wep developer and programmer.
                        </p>
                        <a href="#pablo" onClick={(e) => {
                          e.preventDefault()
                          window.open(
                            "https://github.com/yazanabdulhafez"
                          );
                        }
                        }>
                          Go to GitHub Profile
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>

          </section>
          </Container>
        </main>

        <SimpleFooter />

      </>
    )
  }
}

export default Home;