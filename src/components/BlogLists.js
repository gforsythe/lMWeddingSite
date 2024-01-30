import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from 'react-bootstrap';


function BlogLists() {
  return (
    <Card style={{ backgroundColor: "#e0e0e0", padding: '20px', borderWidth: '.5px', border: "2px solid #828282", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>

      <ListGroup style={{fontSize:"1.6rem"}} >
        <ListGroup.Item variant='light' action href="https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-malaysia" target='blank'>
          Everything you need to know before visiting Malaysia
        </ListGroup.Item>
        <ListGroup.Item variant='light' action href="https://www.ourtasteforlife.com/lgbt-travel-malaysia/"target='blank'>
          Malaysia – LGBT Travel Guide
        </ListGroup.Item>
        <ListGroup.Item variant='light' action href="https://sensiseeds.com/en/blog/countries/cannabis-in-malaysia-laws-use-history/" target='blank'>
          Drug use in Malaysia
        </ListGroup.Item>
        <ListGroup.Item variant='light' action href="https://www.fluentu.com/blog/travel/malaysia-travel-apps/" target='blank'>
          Apps for getting around/traveling in Malaysia
        </ListGroup.Item>
        <ListGroup.Item variant='light' action href="https://www.klook.com/en-MY/blog/things-to-do-kl-attractions-malaysia/"target='blank' >
          Things to do in Kuala Lumpur
        </ListGroup.Item>
        <ListGroup.Item variant='light' action href="https://www.klook.com/en-MY/blog/new-cafes-kl/"target='blank' >
          Cafes to Visit in Kuala Lumpur
        </ListGroup.Item>
        <ListGroup.Item variant='light' action href="https://www.celebritycruises.com/blog/what-to-eat-in-kuala-lumpur" target='blank'>
          Foods to eat in Kuala Lumpur
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default BlogLists;