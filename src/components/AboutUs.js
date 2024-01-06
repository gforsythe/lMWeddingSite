import React from 'react'
import heroShot from '../imgs/heroshot.jpg';
import { Container, Card, Row, Col } from 'react-bootstrap' 

function AboutUs() {
  return (
    <Container fluid style={{ paddingTop: '2rem', maxWidth: '800px' }}>
        <Card style={{ background: '#e0e0e0' }}>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Card style={{ background: '#e0e0e0', border:'none' }}>
            <Card.Body className="text-center">
                <Card.Title>Hi Everyone!</Card.Title>
                <Card.Text style={{paddingTop:"1rem", fontSize:"1.3rem"}}>
                  We’re so excited to share this special day with you. Here you’ll find info about the wedding, how to
                  get there, how to prepare, FAQs, etc. Please take your time to read through everything so you’re ready
                  for our full day of celebrations! 
                  <br/>
                  <br/>
                  - Liyana & Mike
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ background: '#fff' }}>
              <Card.Body>
                <div className="div-20">
                  <img
                    loading="lazy"
                    srcSet={heroShot}
                    className="img img-circle" // Add a class for styling
                    alt="Hero Shot"
                    style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Card>
      </Container>
  )
}

export default AboutUs