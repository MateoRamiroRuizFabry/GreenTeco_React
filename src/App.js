import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import ItemListContainer from './Components/ItemListContainerComponent/ItemListContainerComponent';
import React, {useState} from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './Components/CartCointaner/CartContainer';
import { CartContextProvider } from "./context/cartContext";




function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Page not found: 404</h1>}/>
        <Route path="/cart" element={<CartContainer />}></Route>
        
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
