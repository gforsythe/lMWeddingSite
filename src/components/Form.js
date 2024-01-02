
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../misc/firebase';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Container,Row, Col } from 'react-bootstrap';
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

  const handleSubmitFormData = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'guestList'), formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      coming: false,
      transitMethod: '',
    });
    // Open the success modal
    setIsModalOpen(true);
  };

 

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
<div>
<Container className="d-flex align-items-center justify-content-center"  style={{ minHeight: '48vh' }}>

<Card style={{   backgroundColor: "#f5f5f5" /* Set background color */,width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border:"2px solid #828282",   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" /* Add box shadow for depth */
}}>

    <Form onSubmit={handleSubmitFormData} className="d-flex flex-column ">
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="First Name" rows={5} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lname" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGuestComing">
      <Form.Label>Are You Coming?</Form.Label>

        <Form.Select aria-label="Default select example"   value={formData.coming ? 'yes' : 'no'}  onChange={(e) => setFormData({ ...formData, coming: e.target.value === 'yes' })}
 >    
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVenueTransport">
      <Form.Label>How are you getting to the venue?</Form.Label>

        <Form.Select aria-label="Default select example" value={formData.transitMethod} onChange={(e)=>setFormData({...formData, transitMethod: e.target.value})}>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
        </Form.Select>
      </Form.Group>

     
      <Button type="submit" variant='secondary' > Submit</Button>
    </Form>
  </Card>
  </Container>
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div>
          <h2>Your info has been added. Thank you! We will see you at the wedding</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>

      </div>

  );
}

export default FormForGuests;