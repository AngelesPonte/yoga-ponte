import './item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

export const Item = (props) => {
  return(
 <div className="card1">
   <Card style={{ width:'18rem'}}>
     <Card.Body>
     <Card.Title>{props.title}</Card.Title>
     </Card.Body>
     </Card>
 </div> 
  
  )}
  
   



