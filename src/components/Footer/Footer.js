import './Footer.css'
import { Link } from 'react-router-dom'
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className='Footer-container'>
                <div className='Footer-lineas'>
                    <h2 className='title-footer'>Categorias</h2>
                    <a className='marca'>Nike<Link to={'/marca/Nike'} className='marca-icon'><SiNike/></Link></a>
                    <a className='marca'>Adidas<Link to={'/marca/Adidas'} className='marca-icon'><SiAdidas/></Link></a>
                </div>
                <div className='Footer-lineas'>
                    <h2 className='title-footer'>Informacion</h2>
                    <a className='info-lineas'>(54 11) 5562-2289</a>
                    <a className='info-lineas'>contacto@SneakersFlow.com.ar</a>
                    <a className='info-lineas'>Soler 4500</a>
                </div>
                <div className='Footer-lineas'>
                    <h2 className='title-footer'>Redes Sociales</h2>
                    <a className='redes'><BsYoutube className='icon-redes'/></a>
                    <a className='redes'><BsInstagram className='icon-redes'/></a>
                    <a className='redes'><BsTwitter className='icon-redes'/></a>
                    <a className='redes'><BsFacebook className='icon-redes'/></a>
                </div>
            </div>
        </footer>
    )

}

export default Footer