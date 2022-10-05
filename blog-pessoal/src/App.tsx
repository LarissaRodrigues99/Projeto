import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import "./App.css";
import Login from "./paginas/login/Login";
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from "./components/temas/postagens/listapostagem/ListaPostagem"
import TabPostagem from './components/temas/postagens/tabpostagem/TabPostagem';


function App() {
  return (
    
    <BrowserRouter>
        <Navbar />
            <div style={{ minHeight: '100vh' }}>
        <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/listapostagem" element={<ListaPostagem />} />
            <Route path="/tabpostagem" element={<TabPostagem />} />
            
        </Routes>
            </div>
        <Footer />
    </ BrowserRouter >
      
  );
}

export default App;
