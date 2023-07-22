import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import ItemListContainer from './Components/ItemListContainerComponent/ItemListContainerComponent';
import React, {useState} from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Page not found: 404</h1>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
