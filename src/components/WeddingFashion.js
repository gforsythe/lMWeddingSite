import { Container, Row, Col } from 'react-bootstrap';
import fashion01 from '../imgs/fashion01.png'
import fashion02 from '../imgs/fashion02.png'
import fashion03 from '../imgs/fashion03.png'
import fashion04 from '../imgs/fashion04.png'
import fashion05 from '../imgs/fashion05.png'
import fashion06 from '../imgs/fashion06.png'
import fashion07 from '../imgs/fashion07.png'
import fashion08 from '../imgs/fashion08.png'
import fashion09 from '../imgs/fashion09.png'


function WeddingFashion() {
  return (
    <Container style={{ borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
    <Row>
      <Col md={4} className='mb-4' >
        <img src={fashion01} alt="WeddingFashion1" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion02} alt="WeddingFashion2" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion03} alt="WeddingFashion3" className="img-fluid" />
      </Col>
    </Row>
    <Row>
      <Col md={4} className='mb-4'>
        <img src={fashion04} alt="WeddingFashion4" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion05} alt="WeddingFashion5" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion06} alt="WeddingFashion6" className="img-fluid" />
      </Col>
    </Row>
    <Row>
      <Col md={4} className='mb-4'>
        <img src={fashion07} alt="WeddingFashion7" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion08} alt="WeddingFashion8" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion09} alt="WeddingFashion9" className="img-fluid" />
      </Col>
    </Row>

  </Container>
  )
}

export default WeddingFashion