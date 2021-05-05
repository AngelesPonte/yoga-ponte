import './itemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

export const ItemDetail = (props) => {
  return(
 <div className="itemDetail">
   <Card style={{ width:'18rem'}}>
     <Card.Body>
     <p>{props.price}</p>
     <Card.Text>{props.description}</Card.Text>
     <Card.Text>{props.characteristics}</Card.Text>
    <Button variant="primary">Start free trial</Button>
     </Card.Body>
     </Card>
 </div> 
  
  )}

