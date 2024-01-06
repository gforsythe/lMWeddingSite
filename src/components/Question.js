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
              <br />
              <br />

              Jardin Event Venue: Kampung Cheringin, Kampung Janda Baik, 28750 Bentong, Pahang, Malaysia
              <br />
              <br />

              Venue IG:<a href='https://www.instagram.com/jardineventvenue/'> click here </a>


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What do we wear? </Accordion.Header>
            <Accordion.Body>
              Bright floral colors, please! Check Wedding Day page for samples
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>When do I have to RSVP by?</Accordion.Header>
            <Accordion.Body>
              min 2 months prior so let’s say 15th July 2024
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What kind of presents do you want?</Accordion.Header>
            <Accordion.Body>
              As we’re traveling and can’t bring tons of THINGS back with us to Canada, cash/money transfer is much appreciated!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Where do I send wedding gift to?</Accordion.Header>
            <Accordion.Body>
              TBA
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Are you helping us get there?</Accordion.Header>
            <Accordion.Body>
              Yes! Get yourself to Kuala Lumpur, and we can help you get to the venue. Check the <a href='#gettingThere'> Getting There </a>page for more.
              <br />  <br />
              Complimentary shuffle service is provided for the journey to celebrating our happily ever after!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Is it BYOB?</Accordion.Header>
            <Accordion.Body>
              Yes, please! Feel free to bring drinky drinks to help us celebrate!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Is this wedding kid-friendly?</Accordion.Header>
            <Accordion.Body>
              Yes! We would love to celebrate with your little ones.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Is the venue wheel-chair friendly?  </Accordion.Header>
            <Accordion.Body>
              Yes it is!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>What’s parking like at the venue?</Accordion.Header>
            <Accordion.Body>
              There is a 120 car parking bay provided!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Will the wedding be indoors or outdoors?</Accordion.Header>
            <Accordion.Body>
              It will be an open-air, covered venue with some elements outdoor. Feel free to look at the venue’s socials
              <br />
              <br />
              Venue IG:<a href='https://www.instagram.com/jardineventvenue/'> click here </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>What’s the weather like in the area?</Accordion.Header>
            <Accordion.Body>
              HOT. It’s always hot in Malaysia so don’t feel like you have to layer up! Bring a portable/handheld fan if you like. It could possibly rain as well, so bring umbrellas just in case.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>What type of food will be served?  </Accordion.Header>
            <Accordion.Body>
              TBA
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>What’s your wedding hashtag? </Accordion.Header>
            <Accordion.Body>
              #MikeJohan
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Card.Header>
    </Card>
  );
}

export default Question;