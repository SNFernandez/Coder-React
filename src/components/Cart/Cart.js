import CartE from './images/shopping-cart.svg'
import './Cart.css'
const Cart = () => {
    return(
        <div>
            <img className='cart-image' src={CartE} alt="Cart"/>
            <span className='product-cart'>0</span>
        </div>
    )
}
export default Cart