import React from 'react';
import { useEffect, useState } from 'react';
import CardComponent from '../CardComponent';
import "./styles.css"
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebaseconfig';
import {collection,query,where,getDocs} from "firebase/firestore";

const ItemListCointainer = ({titulo}) =>{

    const [articulosventa, setArticulosventa] = useState([]);

    useEffect(()=>{
        const getArtilugios = async ()=>{
            const q = query(collection(db, "artilugios"));
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id: doc.id })
            });
            setArticulosventa(docs);
        };
        getArtilugios();
    },[])


    console.log(articulosventa);




    return(
        <div>
        <h1>{titulo}</h1>
        <div id="idArticulosventa">
            {articulosventa.map((articulosventa)=>{
                return (
                    <Link to= {"/detail/" + articulosventa.id} >
                        <div id="articuloespecifico">
                            <CardComponent articulosventa={articulosventa} />
                        </div>
                    </Link>

                )
            })}
        </div>
        </div>

    )
}

export default ItemListCointainer
// Linea 26 debe llamar las Cards