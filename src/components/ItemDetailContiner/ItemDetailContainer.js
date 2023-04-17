import React from 'react';
import { getUnProducto } from '../../products';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [products, setProducto] = useState(null)

const {Id} = useParams ()

    useEffect(() => {
        getUnProducto(Id)
            .then(res => {setProducto(res)})
            .catch(error=>{console.error(error)})
    }, [Id])

    return (
        <div>
            <ItemDetail {... products} />
        </div>
    )
}

export default ItemDetailContainer