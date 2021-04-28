import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemList.css';
import {Item} from '../Components/Item/item';

function ItemList () {
const products = [
    {
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
    }
]

return(
<Item
    title= {products[0].title}
    price = {products[0].price}
    description = {products[0].description}
/>
)
}

    export default ItemList;