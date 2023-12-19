
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function FormForGuests() {
  return (

    <Form className="d-flex flex-column align-items-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="First Name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Last Name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Select aria-label="Default select example">
          <option>Are you Coming?</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>How are you getting to the venue?</option>
          <option value="1">Bus</option>
          <option value="2">Train</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Bringing a plus one?</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
        </Form.Select>
      </Form.Group>
      <Button variant='primary'> Submit</Button>

    </Form>
    
  );
}

export default FormForGuests;