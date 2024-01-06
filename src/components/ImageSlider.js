import { Carousel } from 'react-bootstrap';
import slideImg01 from '../imgs/slide01.jpg';
import slideImg02 from '../imgs/slideimg04.jpg';
import slideImg03 from '../imgs/LMH1.jpg';
import slideImg04 from "../imgs/slide02.jpg";
import slideImg05 from "../imgs/slid05.jpg";

function ImageSlider() {
  
  return (
    <Carousel fade interval={2500} controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={slideImg01} alt="First slide" style={{ height: '400px', objectFit: 'contain',}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slideImg02} alt="Second slide" style={{ height: '400px', objectFit: 'contain',  }} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slideImg03} alt="Third slide" style={{ height: '400px', objectFit: 'scale-down',  }} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slideImg04} alt="Fourth slide" style={{ height: '400px', objectFit: 'scale-down',  }} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slideImg05} alt="Fourth slide" style={{ height: '400px', objectFit: 'scale-down',  }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;