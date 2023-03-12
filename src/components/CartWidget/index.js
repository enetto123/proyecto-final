import React from 'react';
import './styles.css';
import './cart_pic.png';
import { useSelector } from 'react-redux';
import Shop from '../../Pages/Shop';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {

    const elementos = useSelector((state) => state.cosas.cosa) 
    console.log(elementos);
    return(
        <div id="idCompra">
            <NavLink to = "/shop">
                <ul>
                <li className='moneyBag'><div id='idCart'></div></li>
                <li className='moneyBag'><div id='idCant'>{elementos.length}</div></li>
                </ul>
            </NavLink>
        </div>

    )
}

export default CartWidget;
