import './itemList.css';
import {Item} from '../Item/item';
import {useEffect, useState} from 'react';

function ItemList () {
const [products, setProducts] = useState(false)


useEffect(() => {
    setTimeout(() => {
    setProducts([{
        title:'Monthly',
        price:10,
        description:'Full accces for a monthly payment of 10 USD.Charges you every month and you can cancel anytime you want.',
    },
    {
        title:'Anually',
        price:100,
        description:'Full accces for a Month.One time payment of 10 USD will be charged.The Giftcard will be delivered and will start when the User logged in ',
    },
    {
        title:'Gift love',
        price:10,
        description:'lorem',
    }])  
    }, 3000);
  }, []);


return(
    <div>
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