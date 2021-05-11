import './itemList.css';
import {Item} from '../Item/item';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer';

function ItemList () {
const [products, setProducts] = useState(false)


useEffect(() => {
    setTimeout(() => {
    setProducts([{
        id:1,
        title:'Monthly',
        price:10,
        description:'Full accces for a monthly payment of 10 USD.Charges you every month and you can cancel anytime you want.', 
        caracteristics:'a',
    },
    {
        id:2,
        title:'Anually',
        price:100,
        description:'Full accces for a year. Pay one time a year. Find Live Yogi for only 27¢ a day!',  
        caracteristics:'a',   
    },
    {
        id:3,
        title:'Gift love',
        price:10,
        description:'Gift a month of yoga online streaming. The Giftcard will be delivered and will start when the User logs in.',
        caracteristics:'a',        
    }])  
    }, 3000);
  }, []);


return(
    <Container>
    <div className='flexRowCards'>
        {products ? 
              products.map((product) => (
                <Item
                    title= {product.title}
                    price = {product.price}
                    description = {product.description}
                    caracteristics={product.caracteristics}
                />
            ))
        :
        <p className="mainDescription center">Pause...Memberships arriving...</p> }
    </div>  

    </Container>    
  )
}
    export default ItemList;