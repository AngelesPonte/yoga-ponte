import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

function ItemCount () {
    const [count, setCount] = useState(1);

useEffect(() => {
      if(count<1){
       setCount(1);}
       else{
         if(count==11){
           setCount(10);
         }
}});
    
 return(
    
    
    <Card className="card1">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
       
        <Button onClick={() => setCount (count - 1)} variant="primary">-</Button>
        <Button> {count} Add to cart </Button>
        <Button onClick={() => setCount (count + 1)} variant="primary">+</Button>
      </Card.Body>
    </Card>
  

)}

export default ItemCount;






