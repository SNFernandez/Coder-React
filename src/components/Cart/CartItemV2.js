
const CartItemV2 = (item, cantidad) => {
return(
    <div>
    <h4>{item.name}</h4>
    <p>Cantidad: {cantidad}</p>
    <p>Precio: $ {item.precio}</p>
    </div>
)

} 

export default CartItemV2