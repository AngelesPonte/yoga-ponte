import './home.css';
import {Navbare} from '../Components/NavBar/navbar'
import { ItemListContainer } from '../Components/ItemListContainer/itemListContainer';
import ItemCount  from '../Components/ItemCount/itemCount';

function Home() {
  return (
    <div className="Home">
    <Navbare/> 
    <ItemListContainer/>
    <ItemCount/>
      
    </div>
  );
}
export default Home;
