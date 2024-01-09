import { Col, Row } from 'react-bootstrap';

function MapComponent() {
  return (
    <Row className="justify-content-center align-items-center mt-4">
      <Col xs="auto">
        <iframe
          title="Google Map"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.229569127566!2d101.68333621475338!3d3.132860379156197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4925290aa981%3A0xdf47a86aa01e738d!2sNU%20Sentral%20Shopping%20Mall%2C%20201%2C%20Jalan%20Tun%20Sambanthan%2C%20Brickfields%2C%2050470%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1641772790185!5m2!1sen!2sus"
        ></iframe>
      </Col>
    </Row>
  );
};


export default MapComponent;