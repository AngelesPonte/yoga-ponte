import './home.css';
import {Navbare} from '../Components/NavBar/navbar'
import ItemCount  from '../Components/ItemCount/itemCount';
import { Greeting } from '../Components/Greeting/greeting';

function Home() {
  return (
    <div className="Home">
    <Navbare/> 
    <Greeting/>
    <ItemCount/>
      
    </div>
  );
}
export default Home;
