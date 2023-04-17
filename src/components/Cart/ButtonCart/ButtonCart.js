import React, { useState } from 'react';
import './ButtonCart.css';

const ButtonCart = () => {
    let minStock = 1
    let maxStock = 15

    const [contador, setContador] = useState(minStock);

    const incrementar = () => {
        if (contador < maxStock){
        setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if ( contador > minStock){
        setContador(contador - 1);
        }
    };

    return (
        <div className='containerbtn'> 
            <div>
                <button onClick={decrementar} className='mas-menos'>-</button>
                <span className='cant'>{contador}</span>
                <button onClick={incrementar} className='mas-menos'>+</button>
            </div>
            <button className='add-cart'>Agregar al carrito</button>
        </div>
    );
};

export default ButtonCart;