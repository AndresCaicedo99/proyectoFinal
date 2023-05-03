import React, {useContext} from 'react'
import logo from '../../images/logopequeño.jpg'
import {Link} from 'react-router-dom'
import { DataContext } from '../../context/Dataprovider'

export const Header = () => {
    const value = useContext(DataContext);
    const [carrito] = value.carrito;
    const [menu, setMenu] = value.menu;
  
  
    const toogleMenu = () =>{
      setMenu(!menu)
    }
   
  
    return (
      <header>
        <div className="menu">
        <box-icon name="menu"></box-icon>
        </div>
        <Link to="/">
        <div className="logo">
          <img src={Nike} alt="Nike" width="150" />
        </div>
        </Link>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>
        </ul>
        <section className='user'>
            <box-icon name='user' type='solid'></box-icon>
        </section>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className="item__total"> {carrito.length} </span>
        </div>
      </header>
    );
  };

