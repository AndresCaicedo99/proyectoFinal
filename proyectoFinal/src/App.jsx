import React from 'react';
import { Header } from './componentes/Header';
import { ProductosLista } from './componentes/Productos/index';
import 'boxicons';

function App() {
  return (
    <section className='App'>
      <Header />
      <ProductosLista />
    </section>
  );
}

export default App
