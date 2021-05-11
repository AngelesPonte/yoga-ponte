import './itemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/itemCount';
import { useState, useContext } from 'react';

export const ItemDetail = (props) => {
  const [count, setCount] = useState(1);

	const onAdd = (e) => {
		setCount(e);
	};

  return(
 <div className="itemDetail">
   <Card style={{ width:'18rem'}}>
     <Card.Body>
     <p>{props.price}</p>
     <Card.Text>{props.description}</Card.Text>
     <Card.Text>{props.characteristics}</Card.Text>
     <ItemCount onAdd={onAdd} />
      <Button variant="primary" onClick={() => (props, count)}>
        Start free trial
     
      </Button>

    
     </Card.Body>
     </Card>
 </div> 
  
  )}

