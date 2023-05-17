
import Home from "./Paginas/home/Home"
import React from "react";
import Navbar from "./Components/Estaticos/navbar/Navbar";
import {Grid} from "@material-ui/core";
import './App.css';
import Footer from "./Components/Estaticos/footer/Footer"



function App() {
  return (
    <>

    <Home />
    <Footer />

    <Navbar/>
      <Footer />

    </>
  )
}

export default App
