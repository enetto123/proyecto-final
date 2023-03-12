import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/features/cosas';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Modals from '../../components/Modals';
import { activar } from '../../redux/features/modal';

import './styles.css';


const Shop = () => {
    const agregados = useSelector((state) => state.cosas.cosa);
    const dispatch = useDispatch();
    let i = 0;
    
    const [vacia,setVacia]= useState(false);
    const [refresh, setRefresh] = useState(0);


    useEffect(()=>{
        if(agregados.length===0){
            setVacia(true)
        }
    },[refresh])

    if(!vacia){
    return(
        <div>
            <h1>Tienda</h1>
            <table>
            <tbody>
                <tr className='titulos'>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                </tr>
                    {agregados.map((art)=>{
                            i=i+1;
                        return(
                        <tr key={art.id}>
                            <td><img src={art.imagen} alt="elemento"></img></td>
                            <td>{art.titulo}</td>
                            <td>{art.cartQuantity}</td>
                            <td><button onClick={()=>{
                                    dispatch(removeFromCart(art))
                                    setRefresh(x=>x+1)
                                }}>X</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            <div className='botonesCont'>
                <button className='eliminarTodo' onClick={() => {
                    dispatch(clearCart())
                    setVacia(true)
                }}> Vaciar mi carrito de compras
                </button>

                <button className='terminarCompra' onClick={() => dispatch(activar())}> Terminar proceso de compra </button>

                <NavLink to="/"><button className = 'contin'>Continuar comprando </button></NavLink>

                <Modals/>
            </div>
        </div>
    )
    }else{
        return(
            <p className='vacio'>No hay elementos en el carrito</p>
        )
    }
}

export default Shop;