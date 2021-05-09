import './itemDetailContainer.css';
import {useEffect, useState} from 'react';
import {ItemDetail} from '../itemDetail/itemDetail';

function ItemDetailContainer () {
const [products, setProducts] = useState(false)

useEffect(() => {
    setTimeout(() => {
    setProducts([
        {
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    },
    {
        characteristics:'More than 100hs of yoga and meditation videos, for all levels, from initial to advance' ,
    },
    {
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