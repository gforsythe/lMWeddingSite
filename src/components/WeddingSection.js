import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function ProductCard({imageSrc, description}) {
  return (
    <Container className="div-55">
      <Row className="div-56 flex-nowrap">
        <Col md={2} className="column-7">
          <div className="div-57">
            <Image
              src={imageSrc}
              alt="Product Image"
              
              loading="lazy"
            />
          </div>
        </Col>
        <Col md={2} className="column-8">
          <div className="div-58">
            <div className='text-center'>
             {description}
            </div>
       
          </div>
          <Button variant='secondary'>More Info</Button>
        </Col>
      </Row>
    </Container>
  );
}


export default ProductCard;
