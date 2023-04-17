import React from 'react';
import { getUnProducto } from '../../products';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [products, setProducto] = useState(null)
    useEffect(() => {
        getUnProducto(3)
            .then(res => setProducto(res))

    }, [])

    return (
        <div>
            <ItemDetail {... products} />
        </div>
    )
}

export default ItemDetailContainer