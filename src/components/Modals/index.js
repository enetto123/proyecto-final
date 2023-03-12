
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { desactivar } from '../../redux/features/modal';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseconfig';



const initialState = {
    nombre:"",
    direccion:"",
    correo:"",
};

const Modals = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.startModal.modal);
    const [orden,setOrden] = useState(false);

    const[values,setValues]=useState(initialState);
    const[purchaseID,setPurchaseID] = useState("");

    const handleOnChange=(e)=>{
        const{value,name} = e.target;
        setValues({ ...values,[name]: value})
    }

    const handleOnSubmit= async (e)=>{
        e.preventDefault();
        const docRef = await addDoc(collection(db, "ventas"), {
           values
          });
          setPurchaseID(docRef.id);
          setValues(initialState);
    }

    return(
        <div className={modal?'modal-open':'modal-close'}>
            <div className='cont_modal'>
                <h2>Solicitud de compra</h2>
                <h3> Ya casi terminamos...</h3>
                <form onSubmit={handleOnSubmit}>
                    <label for="nombre">Nombre: </label>
                    <input type='text' id='nombre' name='nombre' placeholder='Nombre completo' value={values.nombre} onChange={handleOnChange}></input>
                    <label for="direccion">Direccion: </label>
                    <input type='text' id='direccion' name='direccion' placeholder='Dirección del domicilio' value={values.direccion} onChange={handleOnChange}></input>
                    <label for="email">Correo: </label>
                    <input type='text' id='email' name='email' placeholder='aaa@micorreo.com' value={values.email} onChange={handleOnChange}></input>
                    <button type='submit'className='generarOrden' onClick={()=>{setOrden(true)}}>Terminar compra</button>
                    <p className={orden?'ordenG':'ordenNoG'}>Compra terminada con éxito, su código identificador es: {purchaseID}</p>
                    <p className={orden?'ordenG':'ordenNoG'}>Gracias por preferirnos!</p>
                    <button onClick={()=>{dispatch(desactivar())}}>Atras</button>
                </form>
            </div>
        </div>
    )

    
}

export default Modals;