import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from "./Components/Estaticos/footer/Footer";
import Navbar from "./Components/Estaticos/navbar/Navbar";
import Home from "./Paginas/home/Home";
import "./App.css";             
import Login from "./Paginas/login/Login";
import CadastrarUsuario from "./Paginas/cadastrar-user/CadastrarUser";
import Sobre from "./Paginas/sobre/Sobre";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/signin" element={<CadastrarUsuario />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

