import React, {useState, useEffect} from 'react';
import './itemCount.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount () {
    const [count, setCount] = useState(0);
    const stock = 10;
    if (count>stock); {
 return(
      <article className="card-center">
      <div className="card1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Monthly Membership</Card.Title>
        <Card.Text>
        Full accces for a monthly payment of 10 USD. 
        After 3 days of free trial, if you dont cancel your membership, 10 USD will be charged and your membership will strat.
        You can cancel it at any moment
        </Card.Text>
        <Button onClick={() => setCount (count - 1)} variant="primary">-</Button>
         <p> {count} membership </p>
        <Button onClick={() => setCount (count + 1)} variant="primary">+</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="card1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Gift Card</Card.Title>
        <Card.Text>
          Full accces for a Month.
          One time payment of 10 USD will be charged.
          The Giftcard will be delivered and will startwhen the User logged in.
        </Card.Text>
        <Button variant="primary">Gift love</Button>
      </Card.Body>
    </Card>
    </div>
    </article>
)}
}
export default ItemCount;







//import{Membership} from '../Memberships/membership'

//export const List = (props) =>{
//return props.products.map((item) => (
//<Membership
//title={item.title}
//price={item.price}
//description={item.description}
///>
//))
//}