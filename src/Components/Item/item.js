import './item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Item = (props) => {
  return(

   <Card className="card1">
     <Card.Body>
     <Card.Title className="center titleMemb">{props.title}</Card.Title>
     <Card.Text className="membDescription">{props.description}</Card.Text>
     <Card.Text className="price">{props.price} USD </Card.Text>
     <Card.Link href="#">More Info</Card.Link>
     <Card.Link href="#">Start Trial</Card.Link>
     </Card.Body>
     </Card>

  
  )}
  


