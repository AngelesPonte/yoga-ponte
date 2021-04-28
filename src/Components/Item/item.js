import React, {useState, useEffect} from 'react';
import './item.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => (
  
 <div>
     <h2>{props.title}</h2>
     <p>{props.price}</p>
     <p>{props.description}</p>
 </div> 
  
  
)
    /*<div className="card1">
    <Card style={{ width:'18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <p>{props.price}</p>
        <Card.Text>{props.description} </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
    </div>*/



