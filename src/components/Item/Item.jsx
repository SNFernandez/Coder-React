import React from 'react';
import './Item.css'
const Item = ({name, precio, img }) => {
    return (
        <div className='container-pro'>
        <div className='card-pro'>
            <img className='img-pro' src={img} alt={name}  />
            <hr className='hr-pro'/>
            <h3 className='name-pro'>{name}</h3>
            <h3 className='precio-pro'>Precio: ${precio}</h3>
            <button className='btn-pro'>Mas Detalles</button>
        </div>
        </div>
    )
}

export default Item