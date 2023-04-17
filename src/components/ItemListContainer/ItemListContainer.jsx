import { useState, useEffect } from "react";
import { getProducts } from '../../products'
import ItemList from "../ItemsList/ItemList";
const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
        .then(Response => setProducts(Response))
        .catch(error=>console.error(error))
    }, [])




    return (
        <div>
            <h2>Productos</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer