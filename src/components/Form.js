
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../misc/firebase';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Container, } from 'react-bootstrap';
function FormForGuests() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    coming: false, // Initialize "coming" as false (not coming) by default
    transitMethod: '',
    bringingPlusOne: false, // Initialize "bringingPlusOne" as false by default
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmitFormData = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      await addDoc(collection(db, 'guestList'), formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        coming: false,
        transitMethod: '',
      });
      setIsModalOpen(true);
    }

    setValidated(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();

  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      coming: false,
      transitMethod: '',
    });
    setValidated(false);
  };




  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '48vh' }}>

        <Card style={{
          backgroundColor: "#f5f5f5" /* Set background color */, width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" /* Add box shadow for depth */
        }}>

          <Form onSubmit={handleSubmitFormData} className="d-flex flex-column " noValidate>
            <Form.Text style={{ textAlign: 'center', fontSize: '1.2em', paddingBottom: '10px' }}>Let us know if you’ll join us on our special day and if you’ll need a ride to/from the venue</Form.Text>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="name" placeholder="First Name" rows={5} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} isInvalid={validated && !formData.firstName}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name.
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="lname" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} isInvalid={validated && !formData.lastName} />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} isInvalid={validated && !formData.email} />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formGuestComing">
              <Form.Label>Are You Coming?</Form.Label>

              <Form.Select required aria-label="Default select example" value={formData.coming ? 'yes' : 'no'} onChange={(e) => setFormData({ ...formData, coming: e.target.value === 'yes' })} isInvalid={validated && formData.coming === undefined}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select whether you are coming or not.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVenueTransport">
              <Form.Label>How are you getting to the venue?</Form.Label>

              <Form.Select required aria-label="Default select example" value={formData.transitMethod} onChange={(e) => setFormData({ ...formData, transitMethod: e.target.value })} isInvalid={validated && !formData.transitMethod}>
                <option value="default">select a method of transit</option>
                <option value="Bus">Bus With The Wedding Party</option>
                <option value="getting-there-myself">Getting There Myself</option>
                <option value="n/a">N/A</option>

              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select your transit method.
              </Form.Control.Feedback>
            </Form.Group>


            <Button type="submit" variant='secondary' > Submit</Button>
          </Form>
        </Card>
      </Container>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1500,
          },
          content: {
            width: '80%',
            maxWidth: '300px', // Set the maximum width of the modal
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            textAlign: 'center',
            overflow: 'auto', // Allow scrolling if content exceeds the modal height
            maxHeight: '50vh', // Set the maximum height of the modal
          },
        }}>
        <div>
          <h2>Your info has been added. Thank you!<br/><br/> We will see you at the wedding</h2>
          <button style={{margin:"1rem"}} onClick={closeModal}>Close</button>
        </div>
      </Modal>

    </div>

  );
}

export default FormForGuests;