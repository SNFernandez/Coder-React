import CartE from '../Cart/Cart'
import './NavE.css'
const NavE = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1 className='title-h1'><span className='title'>Ecommerce</span></h1>
                    <div className='container-cart'><CartE /></div>
                    <button className='list'>Microfono</button>
                    <button className='list'>Teclado</button>
                    <button className='list'>Auricular</button>
                    <button className='list'>Mouse</button>
                </div>
                <hr className='hr-linea'></hr>
            </nav>
        </header>
    )
}

export default NavE