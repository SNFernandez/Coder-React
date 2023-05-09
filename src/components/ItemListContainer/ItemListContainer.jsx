import { useState, useEffect } from "react";
import { getProducts, getProductsMarca } from '../../products'
import ItemList from "../ItemsList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query, doc } from "firebase/firestore";
import { db } from "../../services/firebase/config";



const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { marca } = useParams()

    /*useEffect(() =>{

        const funcionProductos = marca ? getProductsMarca : getProducts

        funcionProductos(marca)
        .then(Response => setProducts(Response))
        .catch(error=>console.error(error))
    }, [marca])*/

    useEffect(() => {
        const misProductos = marca ? query(collection(db, 'products'), where("marca", '==', marca)) : collection(db, "products")

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(nuevosProductos)
            })
            .catch(error => console.log(error))
    }, [marca])


    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer