import React from 'react'
import { Card,  } from 'react-bootstrap';

function SectionCard({imageSrc, title, description}) {
  return (
    <Card  style={{ backgroundColor: '#e0e0e0',  width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <Card.Img variant='top' src={imageSrc} alt={title}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default SectionCard