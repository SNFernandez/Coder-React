import React from 'react';
import { getUnProducto } from '../../products';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [products, setProducto] = useState(null)

const {Iditem} = useParams ()

    useEffect(() => {
        getUnProducto(Iditem)
            .then(res => {setProducto(res)})
            .catch(error=>{console.error(error)})
    }, [Iditem])

    return (
        <div>
            <ItemDetail {... products} />
        </div>
    )
}

export default ItemDetailContainer