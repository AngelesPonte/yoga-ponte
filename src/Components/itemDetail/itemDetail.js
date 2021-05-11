import './itemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/itemCount';
import { useState, useContext } from 'react';

export const ItemDetail = (props) => {
  
  return(
 <div className="itemDetail">
   <Card className="card1">
    
     <Card.Text>{props.caracteristics}</Card.Text>
   
     </Card>
 </div> 
  
  )}

