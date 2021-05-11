import './itemDetailContainer.css';
import {useEffect, useState} from 'react';
import {ItemDetail} from '../itemDetail/itemDetail';
import { Link, useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const {membId} =useParams()

  const info =[
    {
        id:1,
        title:'Monthly',
        price:10,
        description:'Full accces for a monthly payment of 10 USD.Charges you every month and you can cancel anytime you want.', 
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    },
    {
        id:2,
        title:'Anually',
        price:100,
        description:'Full accces for a year. Pay one time a year. Find Live Yogi for only 27¢ a day!',     
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    },
    {
        id:3,
        title:'Gift love',
        price:10,
        description:'Gift a month of yoga online streaming. The Giftcard will be delivered and will start when the User logs in.',    
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,    
    }
]

function getItemDetailContainer (membId) {
    const myInfo = info.find((info) => info.id === membId)
    return myInfo
}

return(
    <div >
       <p>{getItemDetailContainer(membId).characteristics}</p>
    </div>        
  )
}
