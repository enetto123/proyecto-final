import React from 'react';
import { useEffect, useState } from 'react';
import "./styles.css"
import { db } from '../../firebase/firebaseconfig';
import {collection,query,where,getDocs,documentId} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,clear } from '../../redux/features/conteo';
import { add } from '../../redux/features/cosas';


const CharacterDetail = ({titulo}) =>{
    const[artilugios,setArtilugios]= useState([]);
    const cant = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    let {id}=useParams();

    useEffect(()=>{
        const getArtilugios = async ()=>{
            const q = query(collection(db, "artilugios"), where(documentId(),'==',id));
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id: doc.id })
            });
            setArtilugios(docs);
        };
        getArtilugios();
    },[])

    return(
        <div>
            {artilugios.map((artilugio)=>{
                return (
                    <div key={artilugio.id}>
                        <h1> {artilugio.titulo} </h1>
                        <div className='articulo' >
                            <img id='imagensola' src={artilugio.imagen} alt='articulo'/>
                                <div className='data_container'>
                                    <div className='pys_container'>
                                        <p>Precio: US$ {artilugio.precio} </p>
                                        <p className='stock'>Stock: {artilugio.stock} </p>
                                    </div>
                                    <p>Cantidad:</p>
                                    <div className='botones_container'>
                                        <button className='mas' onClick={()=>{
                                            if(cant < artilugio.stock){
                                                dispatch(increment())}
                                            }}>
                                            +</button>
                                        <span>{cant}</span>
                                                <button className='menos' onClick={()=>{
                                            if(cant > 0){
                                                dispatch(decrement())}
                                            }}>-</button>
                                    </div>
                                        <button className='agregar' onClick={()=>{
                                            if(cant > artilugio.stock){
                                                alert("Cantidad invalida")
                                            }else{
                                                for(let i=0; i<cant;i++){
                                                    dispatch(add(artilugio));
                                                }
                                                dispatch(clear());
                                            }
                                            }}>Agregar al carrito
                                        </button>
                                </div>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default CharacterDetail;
