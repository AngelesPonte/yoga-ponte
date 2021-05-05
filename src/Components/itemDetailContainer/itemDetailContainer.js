import './itemDetailContainer.css';
import {useEffect, useState} from 'react';
import {ItemDetail} from '../itemDetail/itemDetail';

function ItemDetailContainer () {
const [products, setProducts] = useState(false)

useEffect(() => {
    setTimeout(() => {
    setProducts([
        {
        price:10,
        description:'Full accces for a monthly payment of 10 USD.Charges you every month and you can cancel anytime you want.',
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    },
    {
        price:100,
        description:'Full accces for a year. One time payment of 100 USD will be charged.',
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    },
    {
        price:10,
        description:'Gift a month of yoga online streaming. The Giftcard will be delivered and will start when the User logged in.',
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    }])  
    }, 6000);
  }, []);


return(
    <div className='flexRowCards'>
        {products ? 
              products.map((product) => (
                <ItemDetail
                    title= {product.price}
                    price = {product.description}
                    description = {product.characteristics}
                />
            ))
        :
        "hold on, description is coming" }
    </div>        
  )
}
    export default ItemDetailContainer;