import CartE from './images/shopping-cart.svg'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
const {Cart} = useContext (CartContext)
const totalCantidad = Cart.reduce((total,product) => total + product.cantidad, 0)


    return (
        <Link to='/cart'>
            <img className='cart-image' src={CartE} alt="Cart" />
            <span className='product-cart'>{totalCantidad}</span>
        </Link>
    )
}
export default Cart