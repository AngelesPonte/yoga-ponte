import cart from '../../img/Icons/gray cart.png'
import './cartWidget.css'

export const CartWidget = () => {
  return(
    <img className="cart" src={cart}  alt="Cart"  />
  )
}