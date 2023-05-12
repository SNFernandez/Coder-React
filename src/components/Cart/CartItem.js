import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItemV2 from './CartItemV2'


const CartItem = () => {

    const { Cart, CartVacio } = useContext(CartContext)

    const totalcard = Cart.reduce((total, product) => total + product.cantidad, 0)

    const total = Cart.reduce((total, product) => total + (product.item.precio * product.cantidad), 0)

    if (totalcard === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'>Home</Link>
            </div>
        )
    }

    return (
        <div>
            {Cart.map(product => <CartItemV2 key={product.item.id} {...product} />)}
            <h3>total: $ {total}</h3>
            <button onClick={()=> CartVacio()}>Vaciar Carrito</button>
            <Link to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}
export default CartItem