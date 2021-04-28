import './home.css';
import {Navbare} from '../Components/NavBar/navbar';
import { Greeting } from '../Components/Greeting/greeting';
import ItemList from '../Components/itemList/itemList'
import ItemCount  from '../Components/ItemCount/itemCount';


function Home() {
  return (
    <div className="Home">
    <Navbare/> 
    <Greeting/>
    <ItemCount/>
    <ItemList/>
    
    </div>
  );
}
export default Home;
