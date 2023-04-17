import CartE from '../Cart/Cart'
import './NavE.css'
import { NavLink } from 'react-router-dom'

const NavE = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1 className='title-h1'><span className='title'>Sneakers Flow</span></h1>
                    <div className='container-cart'><CartE /></div>
                    <NavLink to ={`/`}className='list'>Inicio</NavLink>
                    <NavLink to={`/marca/Nike`} className='list'>Nike</NavLink>
                    <NavLink to ={`/marca/Adidas`} className='list'>Adidas</NavLink>
                    <NavLink className='list'>Nosotros</NavLink>
                </div>
                <hr className='hr-linea'></hr>
            </nav>
        </header>
    )
}

export default NavE