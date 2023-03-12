import React from 'react';
import './styles.css';
import logo from './logo_bear.png';
import { NavLink } from 'react-router-dom';

const NavBar = ({carrito}) => {
    return(
        <div id='idNavBar'>
            <div id='idLogo'>
            <NavLink to="/">
                <img src={logo} alt='Logo'/>
                <p id='idBear'>The Big Boy</p>
                <p id='idSlogan'>Los mejores articulos para tu caza</p>
            </NavLink>
            </div>
            <div  id="idCategorias">
                <ul>
                    <li className='categoria'><NavLink to="/Camping">CAMPING</NavLink></li>
                    <li className='categoria'><NavLink to="/Consumibles">CONSUMIBLES</NavLink></li>
                    <li className='categoria'><NavLink to="/Pesca">PESCA</NavLink></li>
                    <li className='categoria'><NavLink to="/Armas">ARMAS</NavLink></li>
                    <li className='categoria'><NavLink to="/Accesorios">ACCESORIOS</NavLink></li>
                </ul>
            </div>
            {carrito}
        </div>
    )
}
export default NavBar;
