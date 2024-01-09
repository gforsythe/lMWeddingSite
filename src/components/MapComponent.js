import { Col, Row } from 'react-bootstrap';

function MapComponent() {
  return (
    <Row className="justify-content-center align-items-center mt-4">
      <Col xs="auto">
        <iframe
          title="Google Map"
          width="800"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3983.3479133567727!2d101.6986447!3d3.1418378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zS2wgaG90ZWxz!5e0!3m2!1sen!2sus!4v1642157628085!5m2!1sen!2sus"
          ></iframe>
      </Col>
    </Row>
  );
};


export default MapComponent;