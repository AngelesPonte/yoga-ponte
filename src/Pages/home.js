import './home.css';
import {Navbare} from '../Components/NavBar/navbar';
import { Greeting } from '../Components/Greeting/greeting';
import ItemList from '../Components/itemList/itemList'
import ItemCount  from '../Components/ItemCount/itemCount';
import ItemListContainer from '../Components/ItemListContainer/itemListContainer';
//import {BrowserRouter, Switch, Route, Route} from 'react-router-dom'


function Home() {
  return (
    <div className="Home">
    <Navbare/> 
    <Greeting/>
    <ItemListContainer/>
    </div>
  );
}
export default Home;
