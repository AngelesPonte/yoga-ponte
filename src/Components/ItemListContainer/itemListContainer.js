import './itemListContainer.css'
import {useState} from 'react'
import {useEffect} from 'react'
import ItemList from '../itemList/itemList'

function ItemListContainer() {
    const [member, setMember] = useState([])
 

return (
    <div>
        <h3 className="home">Memberships</h3>
        <div>{member}</div>
        <ItemList/>
        
    </div>
)
}
export default ItemListContainer;