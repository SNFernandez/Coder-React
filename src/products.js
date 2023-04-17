const products = [
    {
        Id: '1',
        name: 'Campus 00S',
        precio: 50000,
        img: '../Images/adidas-campus-00s.png',
        marca: 'Adidas',
        description: 'Lucen un exterior de gamuza premium en tonos opacos, destacándo la mediasuela blanco hueso, una conexión clara con el legado Campus.'
    },
    {
        Id: '2',
        name: 'PiggyandKermit',
        precio: 65000,
        img: '../Images/adidas-miss-piggy-and-kermit.png',
        marca: 'Adidas',
        description: 'Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño. El 50 % del exterior está hecho con material reciclado. '
    },
    {
        Id: '3',
        name: 'Superstar',
        precio: 42000,
        img: '../Images/adidas-superstar.png',
        marca: 'Adidas',
        description: 'Superstar representan a los amantes de la moda urbana. Su distintiva silueta con puntera con relieve sigue relevante, brindando estilo y protección'
    },
    {
        Id: '4',
        name: 'Air Force 1',
        precio: 55000,
        img: '../Images/nike-air-force-1.png',
        marca: 'Nike',
        description: 'La fusión de la comodidad de la duela y un estilo externo a la cancha le da un giro fresco.'
    },
    {
        Id: '5',
        name: 'Max Dawn',
        precio: 67000,
        img: '../Images/nike-air-max-dawn.png',
        marca: 'Nike',
        description: 'el Nike Air Max Dawn está cuidadosamente confeccionado con al menos un 20% de materiales reciclados por peso.'
    },
    {
        Id: '6',
        name: 'Sb Bruin',
        precio: 48000,
        img: '../Images/nike-sb-bruin-react-border.png',
        marca: 'Nike',
        description: 'La entresuela integrada Nike React está confeccionada con una espuma ligera y duradera que proporciona una pisada suave y eficaz.'
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100);
    })
}

export const getUnProducto = (productId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = products.find(prod => prod.Id === productId)
            resolve(producto)
        },150)
    })

}

export const getProductsMarca = (marca) => {
return new Promise (resolve =>{
    setTimeout (() =>{
        const productsMarca = products.filter(prod =>prod.marca === marca)
        resolve(productsMarca)
    },150)
})

}