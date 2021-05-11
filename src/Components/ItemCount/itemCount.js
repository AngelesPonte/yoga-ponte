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
      <article className="card-center">
      <div className="card1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Monthly Membership</Card.Title>
        <Card.Text> </Card.Text>
        <Button onClick={() => setCount (count - 1)} variant="primary">-</Button>
         <p> {count} membership </p>
        <Button onClick={() => setCount (count + 1)} variant="primary">+</Button>
      </Card.Body>
    </Card>
    </div>
    
    </article>
)}

export default ItemCount;






