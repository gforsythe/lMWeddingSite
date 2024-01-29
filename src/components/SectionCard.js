import React from 'react'
import { Card, Button } from 'react-bootstrap';

function SectionCard({imageSrc, title, description, link, btnTxt}) {
  return (
    <Card  style={{ backgroundColor: '#e0e0e0',  width: '100%', maxWidth: '900px', padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <Card.Img variant='top' src={imageSrc} alt={title}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      {btnTxt && (
          <Button variant='secondary' target="_blank" rel="noopener noreferrer" href={link}>
            {btnTxt}
          </Button>
        )}
    </Card.Body>
  </Card>
  )
}

export default SectionCard