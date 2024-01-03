import React from 'react'
import { Card, Button } from 'react-bootstrap';

function SectionCard({imageSrc, title, description}) {
  return (
    <Card  style={{ backgroundColor: '#e0e0e0' }}>
    <Card.Img variant='top' src={imageSrc} alt={title}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant='secondary'>More Info</Button>
    </Card.Body>
  </Card>
  )
}

export default SectionCard