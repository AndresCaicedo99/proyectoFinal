import React from 'react';
import { Header } from './componentes/Header';
import { ProductosLista } from './componentes/Productos/index';
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom"
import { Carrito } from './componentes/Carrito';
import { Paginas } from './componentes/paginas';

function App() {
  return (
    <section className='App'>
      <Router />
      <Header />
      <ProductosLista />
      <Carrito />
      <Paginas />
    </section>
  );
}

export default App
