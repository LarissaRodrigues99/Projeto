import React from 'react';
import "./App.css";
import imagem from "./assets/Imagem inicial.jpg"

function App() {
  return (
    <>
<h1 className='titulo'>Home</h1>
<img src={imagem} alt="Imagem tela inicial" className='img' />
    </>
  );
}

export default App;
