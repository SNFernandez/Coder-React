import React from 'react';
import { getUnProducto } from '../../products';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/config';
import { getDocs,doc } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [products, setProducto] = useState(null)

const {Id} = useParams ()

    /*useEffect(() => {
        getUnProducto(Id)
            .then(res => {setProducto(res)})
            .catch(error=>{console.error(error)})
    }, [Id])*/

    useEffect (() => {
const nuevoDoc = doc (db, "products", Id)

getDocs(nuevoDoc)
.then(res => {
    const data = res.data()
    const nuevoProducto = {id: res.id, ...data}
    setProducto(nuevoProducto)
})
.catch(error =>console.log(error))

    },[Id])

    return (
        <div>
            <ItemDetail {... products} />
        </div>
    )
}

export default ItemDetailContainer