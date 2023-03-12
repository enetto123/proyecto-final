import React from 'react';
import { db } from '../../firebase/firebaseconfig';
import {collection,query,where,getDocs} from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../../components/CardComponent';

const Pesca = () => {

    const [articulosventa, setArticulosventa] = useState([]);

    useEffect(()=>{
        const getArtilugios = async ()=>{
            const q = query(collection(db, "artilugios"), where("categoria", "==", "pesca"));
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id: doc.id })
            });
            setArticulosventa(docs);
        };
        getArtilugios();
    },[])


    return(
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
    )
}

export default Pesca