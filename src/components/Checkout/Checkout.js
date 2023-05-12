import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/config"
import { collection, addDoc } from "firebase/firestore"


const Checkout = () => {
    const { Cart, vaciarCart } = useContext(CartContext)
    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [error, setError] = useState('')
    const [ordenid, setOrdenid] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !apellido || !telefono || !email || !email2) {
            setError("Complete los campos")
            return
        }
        if (email !== email2) {
            setError("los email no coinciden")
            return
        }

        const orden = {
            items: Cart.map((products) => ({
                id: products.item.id,
                name: products.item.name,
                cantidad: products.cantidad,

            })),
            total: Cart.reduce((total, products) => total + products.item.precio * products.cantidad, 0),
            name,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes", orden))
            .then((docRef) => {
                setOrdenid(docRef.id)
                vaciarCart()
            })
            .catch((error) => {

                console.error('Error en la creacion de la orden', error)
                setError('Se produjo un error en la orden,intente mas tarde')
            })
    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                {
                    Cart.map((products) => (
                        <div key={products.item.id}>
                            <p>{products.item.nombre} x {products.cantidad}</p>
                            <p>Precio: ${products.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <hr />
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email-Confirmacion</label>
                    <input type="email" value={email2} onChange={(e) => setEmail2(e.target.value)} />
                </div>
                {error & <div>{error}</div>}
                <button type="submit">Finalizar Compra</button>
            </form>
            {
                ordenid && (
                    <div>Tu numero de orden es {ordenid},Gracias por tu Compra</div>
                )
            }
        </div>
    )
}

export default Checkout