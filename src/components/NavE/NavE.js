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
                    <NavLink to ={`/`}><button className='list'>Inicio</button></NavLink>
                    <NavLink to={`/marca/Nike`}><button className='list'>Nike</button></NavLink>
                    <NavLink to ={`/marca/Adidas`}><button className='list'>Adidas</button></NavLink>
                    <NavLink to ={`*`}><button className='list'>Nosotros</button></NavLink>
                </div>
                <hr className='hr-linea'></hr>
            </nav>
        </header>
    )
}

export default NavE