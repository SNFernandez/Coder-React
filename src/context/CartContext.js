import React, { useState, createContext } from 'react';


export const CartContext = createContext({ carrito: [] })

export const CartProvider = ({ children }) => {

    const [Cart, setCart] = useState([])
    console.log(Cart)
    /*const agregarProducto = (item, cantidad) => {
        const newObj = {
            ...item,
            cantidad
        }
        if (enCart(newObj.id)) {
            Cart.map(e => {
                if (e.id === newObj.id) {
                    e.cantidad += newObj.cantidad
                }
                //retornamos 
                return (e)
            })
        }
        else {
            setCart([...Cart, newObj])
        }
    }*/
    const agregarProducto = (item, cantidad) => {

        if (!enCart(item.Id)) {
            setCart(prev => [...prev, { item, cantidad }])
        } else {
            console.log("agregado al cart")
        }
    }

    const eliminarProducto = (Id) => {
        const cartActualizado = Cart.filter(prod => prod.Id !== Id)
        setCart(cartActualizado)
    }

    const CartVacio = () => {
        setCart([])
    }

    const enCart = (Id) => {
        return Cart.some(prod => prod.Id === Id)
    }

    return (
        <CartContext.Provider value={{ Cart, CartVacio, eliminarProducto, agregarProducto }}>
            {children}
        </CartContext.Provider>
    )


}