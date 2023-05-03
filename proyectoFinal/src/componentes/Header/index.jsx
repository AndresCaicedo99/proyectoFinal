import React from 'react'
import logo from '../../images/logopequeño.jpg'

export const Header = () => {
    const value = useContext(DataContext);
    const [carrito] = value.carrito;
    const [menu, setMenu] = value.menu;
  
  
    const toogleMenu = () =>{
      setMenu(!menu)
    }
   
  
    return (
        <header>
            <a href="#">
                <section className='logo'>
                    <img src={logo} alt="logo" width="150" />
                </section>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
            <section className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item_total'>0</span>
            </section>
        </header>
    )
}
