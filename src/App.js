import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import ItemListContainer from './Components/ItemListContainerComponent/ItemListContainerComponent';
import React, {useState} from 'react';



function App() {
  return (
    <div>
      <header>
        <NavBar colorFondo="WhiteSmoke"></NavBar>
      </header>
      <ItemListContainer greeting={'Bienvenidos a GreenTeco'}></ItemListContainer>
    </div>
  );
}

export default App;
