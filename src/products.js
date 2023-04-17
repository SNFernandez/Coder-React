const products = [
    {
        Id: '1',
        name: 'Campus 00S',
        precio: 50000,
        img: 'Images/adidas-campus-00s.png',
        marca: 'Adidas',
        description: ''
    },
    {
        Id: '2',
        name: 'PiggyandKermit',
        precio: 65000,
        img: 'Images/adidas-miss-piggy-and-kermit.png',
        marca: 'Adidas',
        description: ''
    },
    {
        Id: '3',
        name: 'Superstar',
        precio: 42000,
        img: 'Images/adidas-superstar.png',
        marca: 'Adidas',
        description: 'lorem'
    },
    {
        Id: '4',
        name: 'Air Force 1',
        precio: 55000,
        img: 'Images/nike-air-force-1.png',
        marca: 'Nike',
        description: ''
    },
    {
        Id: '5',
        name: 'Max Dawn',
        precio: 67000,
        img: 'Images/nike-air-max-dawn.png',
        marca: 'Nike',
        description: ''
    },
    {
        Id: '6',
        name: 'Sb Bruin',
        precio: 48000,
        img: 'Images/nike-sb-bruin-react-border.png',
        marca: 'Nike',
        description: ''
    }
]
export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve=>{
        setTimeout(()=>{
const producto = products.find(products => products.id === id)
resolve(producto)
        },1500)
    })

}