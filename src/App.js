import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import venueImg from './imgs/venueImg.jpeg';
import FormForGuests from './components/Form';
import SectionCard from './components/SectionCard';
import NavBar from './components/NavBar';
import Question from './components/Question';
import AboutUs from './components/AboutUs';
import ImageSlider from './components/ImageSlider';

function App() {


  return (

    <div className="div">
      <div id='home' />
      <div className="div-2">
      </div>
      <Container fluid className="app-container">
        <Row className="header-row">
          <Col>
            <h1 className="text-center">Liyana & Mike Get Married</h1>
          </Col>
          <NavBar />
        </Row>

      </Container>
      <ImageSlider />

      <h2 className="text-center" style={{ paddingTop: "2rem", fontSize: "2.5rem" }}>Are You Coming!?</h2>
      <FormForGuests />

      <AboutUs />

      <div className="div-23">
        <div className="div-24">
          <Col xs={12} md={6} className="mx-auto">
            <Card style={{ background: "#e0e0e0" }}>
              <Card.Img variant='top' src={venueImg} alt="Venue" />
              <Card.Body>
                <Card.Title>Jardin Event Venue</Card.Title>
                <Card.Text>Sept 15th, 2024 @ lunch time</Card.Text>
                <Card.Text>Kampung Cheringin, Kampung Janda Baik, 28750 Bentong, Pahang, Malaysia</Card.Text>
                <Button variant='secondary' href='https://www.instagram.com/jardineventvenue/'>More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
      <div style={{ paddingTop: "2rem" }} id='travel'>
        <Col>
          <h1 className="text-center">Travel</h1>
        </Col>
        </div>
      <div className="div-39">
        <div className="div-40">
          <div className="column-5">
            <div className="div-41">
              
              <div className="div-45">
                <div className="div-46">Spot 01</div>
                <div className="div-47">Read more</div>
              </div>
            </div>
          </div>
          <div className="column-6">
            <div className="div-48">
              
              <div className="div-52">
                <div className="div-53">Spot 01</div>
                <div className="div-54">Read more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "2rem" }} id='lifestyle'>
        <Col>
          <h1 className="text-center">Lifestyle</h1>
        </Col>
        </div>
      <div className="div-55">
        <div className="div-56">
          <div className="column-7">
            <div className="div-57">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff4612f193786a6e944536fb94e35206279e41ed930fb87744c08394218eca5d?"
                className="img-6"
              />
            </div>
          </div>
          <div className="column-8">
            <div className="div-58">
              <div className="div-59">
                This is a title to explain the product produced or created by the
                person on the left. Gummies tart brownie sugar plum dragée chocolate
                bar sweet dessert...
              </div>
              <div className="div-60">Read more</div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="div-62">
        <div className="div-63">
          <div className="column-9">
            <div className="div-64">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff4612f193786a6e944536fb94e35206279e41ed930fb87744c08394218eca5d?"
                className="img-10"
              />
            </div>
          </div>
          <div className="column-10">
            <div className="div-65">
              <div className="div-66">
                This is a title to explain the product produced or created by the
                person on the left. Gummies tart brownie sugar plum dragée chocolate
                bar sweet dessert...
              </div>
              <div className="div-67">Read more</div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="div-69">
        <div className="div-70">
          <div className="column-11">
            <div className="div-71">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff4612f193786a6e944536fb94e35206279e41ed930fb87744c08394218eca5d?"
                className="img-14"
              />
            </div>
          </div>
          <div className="column-12">
            <div className="div-72">
              <div className="div-73">
                This is a title to explain the product produced or created by the
                person on the left. Gummies tart brownie sugar plum dragée chocolate
                bar sweet dessert...
              </div>
              <div className="div-74">Read more</div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="div-76">
        <div className="div-77">
          <div className="column-13">
            <div className="div-78">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff4612f193786a6e944536fb94e35206279e41ed930fb87744c08394218eca5d?"
                className="img-18"
              />
            </div>
          </div>
          <div className="column-14">
            <div className="div-79">
              <div className="div-80">
                This is a title to explain the product produced or created by the
                person on the left. Gummies tart brownie sugar plum dragée chocolate
                bar sweet dessert...
              </div>
              <div className="div-81">Read more</div>
              
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "2rem" }} id='faq'>
        <Col>
          <h1 className="text-center">FAQs</h1>
        </Col>
        <Question />
      </div>
      <div  style={{ paddingTop: "2rem" }} id='contact'>
        <Col>
          <h1 className="text-center">Contact</h1>
        </Col>
        <p style={{paddingTop:"1rem"}}className="text-center">INSERT Wedding Planner Contact INFO HERE:</p>
      </div>
      <div className="div-83">
        <div className="div-84">2024 Copyright of GTF Media.</div>
        <div className="div-85">
          <div className="div-86"></div>
          <div className="div-87"></div>
          <div className="div-88"></div>
          <div className="div-89"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
