import './home.css';
import {Navbare} from '../Components/NavBar/navbar'
import { List } from '../Components/List/list';
import { ItemListContainer } from '../Components/ItemListContainer/itemListContainer';

function Price() { 
const item = [
    {
        title:'Monthly',
        price:10,
        description:'Full accces for a monthly payment of 10 USD. You can cancel at any moment'
    },
    {
        title:'Anually',
        price:100,
        description:'Full accces for a yearly payment. One time payment of 100 USD.'
    },
]
}
function Home() {
  return (
    <div className="Home">
    <Navbare/> 
    <ItemListContainer/>
    </div>
  );
}
export default Home;
