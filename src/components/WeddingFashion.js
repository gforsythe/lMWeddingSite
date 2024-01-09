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
    <Container>
    <Row>
      <Col md={4} className='mb-4'>
        <img src={fashion01} alt="Image 1" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion02} alt="Image 2" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion03} alt="Image 3" className="img-fluid" />
      </Col>
    </Row>
    <Row>
      <Col md={4} className='mb-4'>
        <img src={fashion04} alt="Image 4" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion05} alt="Image 5" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion06} alt="Image 6" className="img-fluid" />
      </Col>
    </Row>
    <Row>
      <Col md={4} className='mb-4'>
        <img src={fashion07} alt="Image 4" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion08} alt="Image 5" className="img-fluid" />
      </Col>
      <Col md={4} className='mb-4'>
        <img src={fashion09} alt="Image 6" className="img-fluid" />
      </Col>
    </Row>

  </Container>
  )
}

export default WeddingFashion