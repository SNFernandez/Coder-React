import './ItemDetail.css'
import ButtonCart from '../Cart/ButtonCart/ButtonCart'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({ id, name, precio, img, marca, description, maxstock }) => {
    const [add, setAdd] = useState(0)

    const { agregarProducto } = useContext(CartContext)


    const cantidad = (cantidad) => {
        setAdd(cantidad)
        const item = { id, name, precio, img }
        agregarProducto(item, cantidad)
    }

    return (
        <div className='containerItem-1'>
            <div className='containerItem'>
                <h2 className='infoP'>{name}</h2>
                <h3 className='infoS'>${precio}</h3>
                <h3 className='infoS'>Marca: {marca}</h3>
                <h3 className='infoT'>ID: {id}</h3>
                <img className='imgdetail' src={img} alt={name}></img>
                {
                    add > 0 ? (<Link to={"/cart"}><div className='link-container'><button className='link-ter'>Terminar Compra</button></div></Link>) : (<ButtonCart minStock={1} maxStock={maxstock} add={cantidad} />)
                }
                <h3 className='infoT'>Descripcion: {description}</h3>
            </div>
        </div>
    )
}

export default ItemDetail