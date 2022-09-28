import React from "react";
import './Home.css';
import imagem from "./assets/Imagem inicial.jpg"

function Home(){
    return(
        <>
        <h1 className="titulo">Home</h1>
        <img src={imagem} alt="Imagem home" className="img" />
        </>
    );
    
}
export default Home;