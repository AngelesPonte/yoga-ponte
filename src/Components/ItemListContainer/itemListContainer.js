import './itemListContainer.css'
import {useState} from 'react'
import {useEffect} from 'react'
import ItemList from '../itemList/itemList'
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer'

function ItemListContainer() {
    const [member, setMember] = useState([])
 

return (
    <div>
        <button className="freeTrial" > Start Free Trial</button>
        <div>{member}</div>
        <ItemList/>
        <ItemDetailContainer/>
    </div>
)
}
export default ItemListContainer;