import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import venueImg from './imgs/venueImg.jpeg';
import car from "./imgs/car.jpeg";
import gift from "./imgs/gift.jpeg";
import shuttleBus from "./imgs/shuttleBus.jpeg";
import prepLink01 from './imgs/prepLink01.png'
import prepLink02 from './imgs/prepLink02.jpeg'
import planeImg from "./imgs/plane.jpeg"
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
          <h1 className="text-center">Getting To Malaysia</h1>
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

      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card style={{ background: "#e0e0e0", height:"auto",   width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <Card.Img variant='top' src={planeImg} alt="Canada Travel" style={{ objectFit: 'cover',
    height: '50%'}} />
            <Card.Body className="text-center" >
              <Card.Title>Search for flights that go to (KUL)</Card.Title>
              <Button variant='secondary' target="_blank" rel="noopener noreferrer" href='https://www.google.com/travel/flights'>Search Flights</Button>
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
          <SectionCard imageSrc={car} title={"Drive yourself"}btnTxt={"Click Here For Directions"} link={"https://www.google.com/maps/dir//jardin+event+venue/@3.3215613,101.8060964,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc3de206e4d77d:0x43cfdc867ba00496!2m2!1d101.8472952!2d3.3214709?entry=ttu"} />
        </Col>
        <Col>
          <SectionCard imageSrc={shuttleBus} title={"Shuttle Bus"} description={"If you'd like to be transported  to venue with other guests, please RSVP at the top of the page indicating you'll need a seat on the bus. Closer to September, videos and pictures will be posted on a specific pick up point and how to get there via parking lot, grab or train"} />
        </Col>
      </Row>
      <div style={{ paddingTop: "2.2rem" }}>
        <Col>
          <h2 className="text-center">Hotels In The Area</h2>
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
          <SectionCard imageSrc={prepLink01} title={"15 things to know before going to Malaysia"} description={"From what to pack to social etiquette, here is everything you need to know before visiting Malaysia."} link={"https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-malaysia"} />

        </Col>
        <Col>
          <SectionCard imageSrc={prepLink02} title={"Gay In: Malaysia - Guide to Gay & Lesbian Malaysia"} description={"A guide to LGBT travel in Malaysia. Is Malaysia a gay friendly travel destination? LGBT Rights in Malaysia. Know the facts before you travel."} link={"https://www.ourtasteforlife.com/lgbt-travel-malaysia/"}/>

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
        <p style={{ paddingTop: "1rem" }} className="text-center">TBA</p>
      </div>
   
        <footer style={{fontSize:".8rem"}}>2024 Copyright of GTF Media.</footer>
 
    </div>
  );
}

export default App;
