import './ItemDetail.css'

const ItemDetail = ({ id, name, precio, img, marca }) => {

    return (
        <div className='containerItem'>
            <h2>Nombre: {name}</h2>
            <h3>ID: {id}</h3>
            <h3>Precio: {precio}</h3>
            <h3>Marca: {marca}</h3>
            <h3>Descripcion:</h3>
            <img src={img} alt={name}></img>
        </div>
    )
}

export default ItemDetail