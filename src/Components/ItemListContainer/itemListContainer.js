import './itemListContainer.css'
import {useState} from 'react'
import {useEffect} from 'react'
import ItemList from '../itemList/itemList'

function ShowProduct() {
    const [member, setMember] = useState([])
 

const handleClick = () => {

 /*let bringProducts = new Promise ((resolve, reject) => {
 setTimeout( () => {
   resolve()}
   , 2000)  
 }) */


 };

return (
    <div>
        <button className="freeTrial" onClick={handleClick}> Start Free Trial</button>
        <div>{member}</div>
        <ItemList/>
    </div>
)
}
export default ShowProduct;