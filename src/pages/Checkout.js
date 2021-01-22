import React from 'react'
import CheckoutForm from '../components/CheckoutForm'

import './styles/Checkout.css'

const Checkout = () => {
    return (
        <section className="checkout">
            <div className="checkout-container">
                <h2 className="title title--checkout">Confirmación de tu compra</h2>
                <CheckoutForm/>
            </div>
        </section>
    )
}

export default Checkout
