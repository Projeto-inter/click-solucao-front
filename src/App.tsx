import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Footer from "./Components/Estaticos/footer/Footer";
import Navbar from "./Components/Estaticos/navbar/Navbar";
import Home from "./Paginas/home/Home";
import Login from "./Paginas/login/Login";
import Sobre from "./Paginas/sobre/Sobre";
import CadastrarUsuario from "./Paginas/cadastrar-user/CadastrarUser";
import ListaCategorias from "./Components/categorias/listaCategoria/ListaCategorias";
import DeletarCategoria from "./Components/categorias/deletarCategoria/deletarCategoria";
import CadastroCategoria from "./Components/categorias/cadastroCategoria/CadastroCategoria";
import ListaServicos from "./Components/servicos/listaServico/ListaServicos";
import CadastroServico from "./Components/servicos/cadastrarServico/CadastrarServico";
import DeletarServico from "./Components/servicos/deletarServico/DeletarServico";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CadastrarUsuario />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Sobre />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/formCategorias" element={<CadastroCategoria />} />
            <Route path="/formCategorias/:id" element={<CadastroCategoria />} />
            <Route
              path="/deleteCategorias/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/servicos" element={<ListaServicos />} />
            <Route path="/formServico" element={<CadastroServico />} />
            <Route path="/formServico/:id" element={<CadastroServico />} />
            <Route path="/deleteServico/:id" element={<DeletarServico />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
