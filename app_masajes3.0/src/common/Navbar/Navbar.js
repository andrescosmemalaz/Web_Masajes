import React, { useState } from "react"
import  './Navbar.css'
import { Link } from 'react-router-dom'

const  Navbar = () =>  {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false) 

return (
<>
    <nav className="navbar">
        <div className="container flex_space">
            <div className='menu-icon' onClick={handleClick}>
                <i className={click? "fas fa-times": "fas fa-bars"}></i>
            </div>

            <ul className= {click ? "nav-menu activate" : "nav-menu"}>
                <li> 
                    <Link to = '/' onClick={closeMobileMenu}> Home</Link>
                </li>
                <li>
                    <Link to = '/about' onClick={closeMobileMenu}> Sobre Empresa</Link>
                </li>
                <li>
                    <Link to = '/product' onClick={closeMobileMenu}> Productos</Link>
                </li>
                <li>
                    <Link to = '/services' onClick={closeMobileMenu}> Servicios</Link>
                </li>
                <li>
                    <Link to = '/blogs' onClick={closeMobileMenu}> Blog Salud</Link>
                </li>
                <li>
                    <Link to = '/opinion' onClick={closeMobileMenu}> Opiniones</Link>
                </li>
                <li>
                    <Link to = '/contact' onClick={closeMobileMenu}> Contacto</Link>
                </li>
            </ul>

            <div className="login-area flex">
                <li>
                    <Link to={'/sign-in'}>
                        <i className="far fa-chevron-right">Ingresar</i>
                    </Link>
                </li>
                <li>
                    <Link to={'/register'}>
                        <i className="far fa-chevron-right">Registrar</i>
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                        <button className="primary-btn">Solicitar Precios</button>
                    </Link>
                </li>
            </div>
        </div> 
    </nav>

        <header>
            <div className="container flex_space">
                <div className="logo">
                    <img src="images/logo.png" alt="" />
                </div>
            
                <div className="contact flex_space"> 
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="text">
                            <h4>Horarios de Atención</h4>
                            <Link to='/contact'>Lunes - Sábado : 8:00 am a 5:00pm</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <div className="text">
                        <h4>Llamános</h4>
                        <Link to='/contact'>+51 987654321</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h4>Correo</h4>
                            <Link to='/contact'>info@juliaterapeuta.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
)
}

export default Navbar