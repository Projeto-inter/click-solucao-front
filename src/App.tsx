import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sobre from "./Paginas/sobre/Sobre";
import Home from "./Paginas/home/Home";
import Navbar from "./Components/Estaticos/navbar/Navbar";
import Footer from "./Components/Estaticos/footer/Footer";
import Login from "./Paginas/login/Login";
import CadastrarUsuario from "./Paginas/cadastrar-user/CadastrarUser";

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
