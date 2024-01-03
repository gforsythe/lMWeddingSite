import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function Question() {
  return (
    <Card >
      <Card.Header>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>When and where is the wedding? </Accordion.Header>
            <Accordion.Body>
              Sept 15th, 2024 @ lunch time
              <br/>
              <br/>

              Jardin Event Venue: Kampung Cheringin, Kampung Janda Baik, 28750 Bentong, Pahang, Malaysia
              <br/>
              <br/>

              Venue IG:<a  href='https://www.instagram.com/jardineventvenue/'> click here </a>


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What do we wear? </Accordion.Header>
            <Accordion.Body>
            Bright floral colors, please! Check Wedding Day page for samples

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>When do I have to RSVP by?  </Accordion.Header>
            <Accordion.Body>
            min 2 months prior so let’s say 15th July 2024 

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Header>
    </Card>
  );
}

export default Question;