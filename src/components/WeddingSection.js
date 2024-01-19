import React from 'react';
import { Container, Row, Col, Image,  } from 'react-bootstrap';

function ProductCard({imageSrc, description}) {
  return (
    <Container className="div-55">
      <Row className="div-56 flex-nowrap">
        <Col md={2} className="column-7">
          <div className="div-57" style={{borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
            <Image
              src={imageSrc}
              alt="Product Image"
              
              loading="lazy"
            />
          </div>
        </Col>
        <Col md={2} className="column-8">
          <div className="div-58" style={{borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
            <div className='text-center'>
             {description}
            </div>
       
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default ProductCard;
