import React from 'react'
import logo from "../../images/Nike.jpg"

export const Header = () => {
    return (
        <header>
            <section className='menu'>
                <box-icon name='menu'></box-icon>
            </section>
            <a href="#">
                <section className='logo'>
                    <img src="{Nike}" alt="" />
                </section>
            </a>
        </header>
    )
}