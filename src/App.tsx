import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from "./Components/Estaticos/footer/Footer";
import Navbar from "./Components/Estaticos/navbar/Navbar";
import Home from "./Paginas/home/Home";
import "./App.css";             
import Login from "./Paginas/login/Login";


  

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;