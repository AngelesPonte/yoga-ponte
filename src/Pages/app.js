import './app.css';
import {Navbare} from '../Components/NavBar/navbar';
import { Footer } from '../Components/Footer/footer';
import { Home } from './Home/home';
import { FullLibrary } from './FullLibrary/fullLibrary';
import ItemList from '../Components/itemList/itemList';
import ItemCount  from '../Components/ItemCount/itemCount';
import ItemListContainer from '../Components/ItemListContainer/itemListContainer';
import { ItemDetail } from '../Components/itemDetail/itemDetail';

import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';



function App() {
  return (
   
    <BrowserRouter>
      <Navbare/>
        <Switch> 
          <Route exact path='/'> 
            <Home/> 
          </Route >
          <Route path='/FullLibrary'>
            <FullLibrary/>
          </Route>
          <Route path='/itemDetails' component={ItemDetail} />
  
        </Switch>
      <Footer/>
    </BrowserRouter> 
           
          
        
      
  
  );
}
export default App;
