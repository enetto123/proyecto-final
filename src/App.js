import './App.css';
import CartWidget from './components/CartWidget';
import ItemListCointainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//PAGINAS 

import Camping from "./Pages/Camping/Camping.js";
import Consumibles from "./Pages/Consumibles/Consumibles.js";
import Pesca from "./Pages/Pesca/Pesca.js";
import Armas from "./Pages/Armas/Armas.js";
import Accesorios from "./Pages/Accesorios/Accesorios.js";
import Home from "./Pages/Home/Home.js";
import CharacterDetail from './Pages/CharacterDetail/CharacterDetail';
import Shop from './Pages/Shop';




const App = ()=> {
  return (



<BrowserRouter>
  <div className="App">
    <NavBar carrito={<CartWidget/>}/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/Camping" element ={<Camping/>}/>
      <Route path="/Consumibles" element ={<Consumibles/>}/>
      <Route path="/Pesca" element ={<Pesca/>}/>
      <Route path="/Armas" element ={<Armas/>}/>
      <Route path="/Accesorios" element ={<Accesorios/>}/>
      <Route path="/detail/:id" element ={<CharacterDetail/>} /> 
      <Route path="/shop" element ={<Shop/>}/>
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
