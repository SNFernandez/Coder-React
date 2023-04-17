import './ItemDetail.css'
import ButtonCart from '../Cart/ButtonCart/ButtonCart'
const ItemDetail = ({ Id, name, precio, img, marca, description }) => {

    return (
        <div className='containerItem'>
            <h2 className='infoP'>{name}</h2>
            <h3 className='infoS'>${precio}</h3>
            <h3 className='infoS'>Marca: {marca}</h3>
            <h3 className='infoT'>ID: {Id}</h3>
            <img className='imgdetail' src={img} alt={name}></img>
            <ButtonCart/>
            <h3 className='infoT'>Descripcion: {description}</h3>
        </div>
    )
}

export default ItemDetail