import './itemList.css';
import {Item} from '../Item/item';
import {useEffect, useState} from 'react';


function ItemList () {
const [products, setProducts] = useState(false)


useEffect(() => {
    setTimeout(() => {
    setProducts([{

        title:'Monthly Membership',
     
        
    },
    {
        title:'Anually Membership',
   
        
    },
    {
        title:'Gift love',
    
        
    }])  
    }, 3000);
  }, []);


return(
    <div className='flexRowCards'>
        {products ? 
              products.map((product) => (
                <Item
                    title= {product.title}
                    price = {product.price}
                    description = {product.description}
                />
            ))
        :
        "no hay productos" }
    </div>        
  )
}
    export default ItemList;