import { Container, Row, Col, Nav, Navbar, Carousel, Card, Button } from 'react-bootstrap';
import venueImg from './imgs/venueImg.jpeg'
import heroShot from './imgs/heroshot.jpg';
import slideImg01 from './imgs/slide01.jpg';
import slideImg02 from './imgs/slideimg04.jpg';
import slideImg03 from './imgs/LMH1.jpg';
import slideImg04 from "./imgs/slide02.jpg";
import slideImg05 from "./imgs/slid05.jpg"
import FormForGuests from './components/Form';
import SectionCard from './components/SectionCard';
import Question from './components/Question';

function App() {
  return (

    <div className="div">
      <div className="div-2">
        <div className="div-3"><a style={{textDecoration:'none', color:"black"}} href='#faq'>FAQ</a></div>
      </div>
      <Container fluid className="app-container">
        <Row className="header-row">
          <Col>
            <h1 className="text-center">Liyana & Mike Get Married</h1>
          </Col>

      <Navbar className="justify-content-center" expand="md">

<Nav className="ml-auto">
  <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
  <Nav.Link href="#travel" className="nav-link">Travel</Nav.Link>
  <Nav.Link href="#lifestyle" className="nav-link">Lifestyle</Nav.Link>
  <Nav.Link href="#about" className="nav-link">About</Nav.Link>
  <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
</Nav>

</Navbar>
        </Row>

      </Container>
      <Carousel fade className="mt-4"  interval={2500} controls={false} >
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg01} alt="First slide" style={{ height: '400px', objectFit: 'contain', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg02} alt="Second slide" style={{ height: '400px', objectFit: 'contain', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg03} alt="Third slide" style={{ height: '400px', objectFit: 'scale-down', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg04} alt="Fourth slide" style={{ height: '400px', objectFit: 'scale-down', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg05} alt="Fourth slide" style={{ height: '400px', objectFit: 'scale-down', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} />
        </Carousel.Item>

      </Carousel>

      <h2 className="text-center" style={{paddingTop:"2rem", fontSize:"2.5rem"}}>Are You Coming!?</h2>
      <FormForGuests />


      <div className="div-16">
        <div className="div-17">
          <div className="column">
            <div className="div-18">
              Hi everyone! We’re so excited to share this special day with you. Here
              you’ll find info about the wedding, how to get there, how to prepare,
              FAQs, etc. Please take your time to read through everything so you’re
              ready for our full day of celebrations! But first…
            </div>
          </div>
          <div className="column-2">
            <div className="div-19">
              <div className="div-20">
                <img
                  loading="lazy"
                  srcSet={heroShot}
                  className="img img-circle" // Add a class for styling
                  alt="Hero Shot"
                />
                Liyana & Mike
              </div>
              <div className="div-22">A Cute bio about Liyana and Mike</div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="div-23">
        <div className="div-24">
        <Col xs={12} md={6} className="mx-auto">
        <Card  style={{ background:"#e0e0e0" }}>
    <Card.Img variant='top' src={venueImg} alt="Venue"/>
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
      <div className="div-39">
        <div className="div-40">
          <div className="column-5">
            <div className="div-41">
              <div className="div-42">
                <div className="div-43"></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05336f7019f651a02565d369da63a44b376b59afbf6e59af4ce28b0bf06de041?"
                  className="img-4"
                />
                <div className="div-44">
                  This is a testimonial related to travel, and some
                  <br />
                  dummy text to make it long.
                </div>
              </div>
              <div className="div-45">
                <div className="div-46">Spot 01</div>
                <div className="div-47">Read more</div>
              </div>
            </div>
          </div>
          <div className="column-6">
            <div className="div-48">
              <div className="div-49">
                <div className="div-50"></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05336f7019f651a02565d369da63a44b376b59afbf6e59af4ce28b0bf06de041?"
                  className="img-5"
                />
                <div className="div-51">
                  This is a testimonial related to travel, and some
                  <br />
                  dummy text to make it long.
                </div>
              </div>
              <div className="div-52">
                <div className="div-53">Spot 01</div>
                <div className="div-54">Read more</div>
              </div>
            </div>
          </div>
        </div>
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
              <div className="div-61">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-7"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-8"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-9"
                />
              </div>
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
              <div className="div-68">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-11"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-12"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-13"
                />
              </div>
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
              <div className="div-75">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-15"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-16"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-17"
                />
              </div>
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
              <div className="div-82">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-19"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-20"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c453c831610216cfea6422f1a00d1dca191d8057a840147298b244e86aa0655?"
                  className="img-21"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingTop: "2rem"}} id='faq'>
      <Col>
            <h1 className="text-center">FAQs</h1>
          </Col>
      <Question />
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
