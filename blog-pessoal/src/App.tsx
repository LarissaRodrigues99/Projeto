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
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/temas/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroPost from './components/temas/postagens/cadastroPost/CadastroPost';
import { Provider } from 'react-redux';
import store from './store/Store';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
    return (
    <Provider store={store}>
        <ToastContainer/>
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
            <Route path="/formularioPostagem" element={<CadastroPost />} /> 
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
            </div>
        <Footer />
    </ BrowserRouter >
      </Provider>
  );
}

export default App;
