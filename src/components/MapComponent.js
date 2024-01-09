import { Col, Row } from 'react-bootstrap';

function MapComponent() {
  return (
    <Row className="justify-content-center align-items-center mt-4">
      <Col xs={12} sm={10} md={8} lg={6} xl={4}>
        <div style={{ padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
          <iframe
            title="Google Map"
            width="100%"
            height="300" // Adjust the height as needed for your design
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3983.2871412128633!2d101.6812865!3d3.131982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels+KL+Sentral!5e0!3m2!1sen!2sus!4v1642177550844!5m2!1sen!2sus"
          ></iframe>
        </div>
      </Col>
    </Row>
  );
};


export default MapComponent;