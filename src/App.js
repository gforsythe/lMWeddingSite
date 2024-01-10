import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import venueImg from './imgs/venueImg.jpeg';
import car from "./imgs/car.jpeg";
import gift from "./imgs/gift.jpeg";
import shuttleBus from "./imgs/shuttleBus.jpeg";
import canFlag from './imgs/flag.png';
import aussieFlag from "./imgs/aussieFlag.png";
import FormForGuests from './components/Form';
import SectionCard from './components/SectionCard';
import NavBar from './components/NavBar';
import Question from './components/Question';
import AboutUs from './components/AboutUs';
import ImageSlider from './components/ImageSlider';
import WeddingSection from './components/WeddingSection';
import MapComponent from './components/MapComponent';
import WeddingFashion from './components/WeddingFashion';

function App() {


  return (

    <div className="div">
                <NavBar />

      <div id='home' />
      <div className="div-2">
      </div>
      <Container fluid className="app-container">
        <Row className="header-row">
          <Col>
            <h1 style={{ paddingTop:"3rem", margin: "2opx auto" }} className="text-center">Liyana & Mike Get Married</h1>
          </Col>
        </Row>

      </Container>
      <ImageSlider />

      <h2 className="text-center" style={{ paddingTop: "2rem", fontSize: "2.5rem" }}>Are You Coming!?!</h2>
      <FormForGuests />
      <div id='about' />

      <AboutUs />

      <div className="div-23">
        <div className="div-24">
          <Col xs={12} md={6} className="mx-auto">
            <Card style={{ background: "#e0e0e0", width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Img variant='top' src={venueImg} alt="Venue" />
              <Card.Body>
                <Card.Title>Jardin Event Venue</Card.Title>
                <Card.Text>Sept 15th, 2024 @ lunch time</Card.Text>
                <Card.Text>Kampung Cheringin, Kampung Janda Baik, 28750 Bentong, Pahang, Malaysia</Card.Text>
                <Button variant='secondary' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/jardineventvenue/'>More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
      <div style={{ paddingTop: "2rem" }} id='gettingThere'>
        <Col>
          <h1 className="text-center">Getting There</h1>
        </Col>
      </div>
      <Container className="text-center mt-4">
        <p className="mb-3" style={{fontSize:"1.5rem"}}>
          For anyone coming from outside of Malaysia, please arrive in Kuala Lumpur, Malaysia by Sept. 14th, 2024.
        </p>
        <p style={{fontSize:"1.5rem"}}>
          Kuala Lumpur International Airport - Airport code: KUL<br /><br />

          <strong style={{fontSize:"1.6rem"}}>*If you are family attending the Tea Ceremony, please arrive by Sept 13th, 2024*</strong>
        </p>
      </Container>

      <Row>
        <Col>
          <Card style={{ background: "#e0e0e0", height:"100%",   width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <Card.Img variant='top' src={canFlag} alt="Canada Travel" style={{ objectFit: 'cover',
    height: '50%'}} />
            <Card.Body>
              <Card.Title>Travel From Canada</Card.Title>
              <Card.Text style={{fontSize:"1.2rem"}}>Vancouver/Toronto to Hong Kong/Japan/Taiwan/Korea, then Kuala Lumpur</Card.Text>
              <Card.Text style={{fontSize:"1.2rem"}}> Vancouver to Singapore, then to Kuala Lumpur  </Card.Text>
              <Button variant='secondary' target="_blank" rel="noopener noreferrer" href='https://www.google.com/travel/flights'>More Info</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ background: "#e0e0e0", height:"100%",  width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <Card.Img variant='top' src={aussieFlag} alt="Australia Travel" style={{ objectFit: 'cover',
    height: '60%'}}  />
            <Card.Body>
              <Card.Title>Travel From Australia</Card.Title>
              <Card.Text style={{fontSize:"1.2rem"}}>Sydney to Kuala Lumpur, direct</Card.Text>
              <Card.Text style={{fontSize:"1.2rem"}}>Sydney to Singapore, then Kuala Lumpur </Card.Text>
              <Button variant='secondary'  target="_blank" rel="noopener noreferrer" href='https://www.google.com/travel/flights'>More Info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div style={{ paddingTop: "2rem", paddingBottom:"1.5rem" }}>
        <Col>
          <h2 className="text-center">Getting to the Venue </h2>
        </Col>
      </div>

      <Row>
        <Col>
          <SectionCard imageSrc={car} title={"Drive yourself"} />
        </Col>
        <Col>
          <SectionCard imageSrc={shuttleBus} title={"Shuttle Bus"} description={"Closer to Sept 2024, videos and pictures will be posted on specific pick up point and how to get there via parking lot, Grab, or train "} />
        </Col>
      </Row>
      <div style={{ paddingTop: "2.2rem" }}>
        <Col>
          <h2 className="text-center">Hotels in the area</h2>
        </Col>
      </div>
      <MapComponent />

      <div style={{ paddingTop: "2rem" }} id='wedding'>
        <Col>
          <h1 className="text-center">Wedding</h1>
        </Col>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <Col>
          <h2 className="text-center">On the Wedding Day </h2>
        </Col>
      </div>
      <Container className="text-center mt-4">
        <p className="mb-3" style={{fontSize:"1.5rem"}}>
          Liyana and Mike couldn’t be more opposite. Liyana loves bright, floral colors, while Mike appreciates darker nature tones.
          <br />
          So, here are samples of things they both love that you can wear to the wedding.
        </p>
      </Container>
      <WeddingFashion />
      <div style={{ paddingTop: "2rem", paddingBottom:"1.2rem" }}>
        <Col>
          <h2 className="text-center">What To Gift </h2>
        </Col>
      </div>
      <WeddingSection imageSrc={gift} description={"As we’re traveling and can’t bring tons of THINGS back with us to Canada, cash/money transfer is much appreciated! "} />


      <div style={{ paddingTop: "2rem" }} id='preparing'>
        <Col>
          <h1 className="text-center">Preparing for Malaysia </h1>
        </Col>
      </div>
      <Row>
        <Col>
          <SectionCard />

        </Col>
        <Col>
          <SectionCard />

        </Col>
      </Row>




      <div style={{ paddingTop: "2rem" }} id='faq'>
        <Col>
          <h1 className="text-center">FAQs</h1>
        </Col>
        <Question />
      </div>
      <div style={{ paddingTop: "2rem" }} id='contact'>
        <Col>
          <h1 className="text-center">Contact</h1>
        </Col>
        <p style={{ paddingTop: "1rem" }} className="text-center">INSERT Wedding Planner Contact INFO HERE:</p>
      </div>
   
        <footer>2024 Copyright of GTF Media.</footer>
 
    </div>
  );
}

export default App;
