import './item.css';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/itemCount'

export const Item = (props) => {
    const [count, setCount] = useState(1);
  
    const onAdd = (e) => {
      setCount(e);
    };
  
  return(

   <Card className="card1">
     <Card.Body>
     <Card.Title className="center titleMemb">{props.title}</Card.Title>
     <Card.Text className="membDescription">{props.description}</Card.Text>
     <Card.Text className="price">{props.price} USD </Card.Text>
     <ItemCount onAdd={onAdd} />
      <Button variant="primary" onClick={() => (props, count)}>
        Start free trial
      </Button>

     <Card.Link as={Link} to="/itemDetails">More Info</Card.Link>
     
     </Card.Body>
     </Card>

  
  )}
  


