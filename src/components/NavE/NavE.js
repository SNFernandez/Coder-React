import CartE from '../Cart/Cart'
import './NavE.css'
const NavE = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1 className='title-h1'><span className='title'>Sneakers Flow</span></h1>
                    <div className='container-cart'><CartE /></div>
                    <button className='list'>Inicio</button>
                    <button className='list'>Nike</button>
                    <button className='list'>Adidas</button>
                    <button className='list'>Nosotros</button>
                </div>
                <hr className='hr-linea'></hr>
            </nav>
        </header>
    )
}

export default NavE