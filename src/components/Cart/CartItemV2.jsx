import './CartItemV2.css'
const CartItemV2 = ({item, cantidad}) => {
return(
    <div>
    <h4 className='item-name'>{item.name}</h4>
    <img className='item-img' src={item.img} alt={item.img}/>
    <p className='cantidad'>Cantidad: {cantidad}</p>
    <p className='item-precio'>Precio: ${item.precio}</p>
    </div>
)
} 

export default CartItemV2