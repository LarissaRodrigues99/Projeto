import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import "./App.css";
import Login from "./paginas/login/Login";
import Home from './paginas/home/Home';

function App() {
  return (
    
    <BrowserRouter>
        <Navbar />
            <div style={{ minHeight: '100vh' }}>
        <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            
        </Routes>
            </div>
        <Footer />
    </ BrowserRouter >
      
  );
}

export default App;
