import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./Components/Estaticos/footer/Footer";
import Navbar from "./Components/Estaticos/navbar/Navbar";
import Home from "./Paginas/home/Home";
import "./App.css";
import Login from "./Paginas/login/Login";
import CadastrarUsuario from "./Paginas/cadastrar-user/CadastrarUser";
import Sobre from "./Paginas/sobre/Sobre";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Sobre />} />
            <Route path="/register" element={<CadastrarUsuario />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
