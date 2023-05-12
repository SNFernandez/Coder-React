import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'

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

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenid(docRef.id)
                vaciarCart()
            })
            .catch((error) => {

                console.error('Error en la creacion de la orden', error)
                setError('Se produjo un error en la orden,intente mas tarde')
            })
    }

    function handleReset() {
        setName("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmail2("");
        setError("");
        setOrdenid("");
    };

    const {CartVacio } = useContext(CartContext)
    return (
        <div>
            <h2 className="title-Checkout">Checkout</h2>
            <form onSubmit={handleSubmit}>
                {
                    Cart.map((products) => (
                        <div key={products.item.id}>
                            <img className="imgCheckout" src={products.item.img} />
                            <p className="name-cantidad">{products.item.name} x {products.cantidad}</p>
                            <p className="precio-item">Precio: ${products.item.precio}</p>
                        </div>
                    ))
                }
                <div className="container-Checkout">
                    <div>
                        <label className="label-Checkout" htmlFor="">Nombre:</label>
                        <input className="input-Checkout" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="label-Checkout" htmlFor="">Apellido:</label>
                        <input className="input-Checkout" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div>
                        <label className="label-Checkout" htmlFor="">Telefono:</label>
                        <input className="input-Checkout" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div>
                        <label className="label-Checkout" htmlFor="">Email:</label>
                        <input className="input-Checkout" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="label-Checkout" htmlFor="">Email-Confirmacion:</label>
                        <input className="input-Checkout" type="email" value={email2} onChange={(e) => setEmail2(e.target.value)} />
                    </div>
                </div>
                {error && <div className="error-Checkout">{error}</div>}
                <button className="finalizar-btn" type="submit" onClick={CartVacio}>Finalizar Compra</button>
                <button className="vaciar-btn" onClick={handleReset}>Vaciar</button>
            </form>
            {
                ordenid && (
                    <div className="ordenid">Tu numero de orden es {ordenid}, Gracias por tu Compra</div>
                )
            }
            <button className="link-home"><Link to='/'>Volver al Home</Link></button>
        </div>
    )
}

export default Checkout