import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const ItemCard = ({ name, precio, img, Id }) => {
    return (
        <div className='container-pro'>
            <div className='card-pro'>
                <img className='img-pro' src={img} alt={name} />
                <hr className='hr-pro' />
                <h3 className='name-pro'>{name}</h3>
                <h3 className='precio-pro'>Precio: ${precio}</h3>
                <Link to={`/item/${Id}`}>/<button className='btn-pro'>Mas Detalles</button></Link>
                {
                    //<button className='btn-pro'>Mas Detalles</button>
                }
            </div>
        </div>
    )
}

export default ItemCard