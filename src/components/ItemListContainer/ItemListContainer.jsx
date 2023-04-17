import { useState, useEffect } from "react";
import { getProducts, getProductsMarca } from '../../products'
import ItemList from "../ItemsList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {marca} = useParams ()

    useEffect(() =>{

        const funcionProductos = marca ? getProductsMarca : getProducts


        funcionProductos(marca)
        .then(Response => setProducts(Response))
        .catch(error=>console.error(error))
    }, [marca])




    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer