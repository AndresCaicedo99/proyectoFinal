import React from 'react'
import Card from '../../images/img03.jpg'

export const Carrito = () => {
    return (
        <section className='carritos show'>
            <section className='carrito show'>
                <br /><br /><br /><br /><br /><br />
                <section className="carrito_close">
                <box-icon name="x"></box-icon>
                </section>
                <h2>Mi carrito</h2>
                <section className="carrito_center">

                    
                    <section className="carrito_item">
                        <img src={Card} alt="" />
                    </section>
                    <section>
                        <h3>title</h3>
                        <p className="price">$345</p>
                    </section>
                    <section>
                        <box-icon name="up-arrow" type="solid"></box-icon>
                        <p className='cantidad'>1</p>
                        <box-icon name="down-arrow" type="solid"></box-icon>
                    </section>
                    <section className='remove_item'>
                    <box-icon name="trash" type="solid"></box-icon>
                    </section>
                </section>
                <section className="carrito_footer">
                <h3>Total: $2334 </h3>
                <button className='btn'>Pagar</button> 11:12
            </section>
            </section>
            
        </section>
    )
}
