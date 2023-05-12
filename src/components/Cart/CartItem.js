import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItemV2 from './CartItemV2'
import './CartItem.css'


const CartItem = () => {

    const { Cart, CartVacio } = useContext(CartContext)

    const totalcard = Cart.reduce((total, product) => total + product.cantidad, 0)

    const total = Cart.reduce((total, product) => total + (product.item.precio * product.cantidad), 0)

    if (totalcard === 0) {
        return (
            <div>
                <h1 className='nada'>No hay productos en el carrito</h1>
                <button className='btn-link'><Link to='/' className='home'>Home</Link></button>
            </div>
        )
    }

    return (
        <div className='container-cartitem'>
            {Cart.map(product => <CartItemV2 key={product.item.id} {...product} />)}
            <h3 className='total'>Total: ${total}</h3>
            <button className='btn-vaciar' onClick={()=> CartVacio()}>Vaciar Carrito</button>
            <button className='btn-finalizar'><Link to='/checkout'>Finalizar Compra</Link></button>
        </div>
    )
}
export default CartItem