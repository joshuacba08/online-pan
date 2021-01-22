import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles/CartOrderSumary.css';

const CartOrderSumary = ({ subTotal }) => {

    let history = useHistory();
    const goToProduct = () => {
        history.push("/shop");
    }
    const goToCheckout = () => {
        history.push("/checkout");
    }

    return (
        <section className="cart-order-sumary">
            <div className="cart-order-sumary__container">
                <h3 className="cart-order-sumary__title title--subtotal">Sub total <span>${subTotal}</span></h3>
                <h3 className="cart-order-sumary__title title--discounts">Descuentos</h3>
                <ul>
                    <li className="discounts-list">Entrega a domicilio <span>Gratis</span></li>
                </ul>
                <hr className="cart-order-sumary__line" />
                <h3 className="cart-order-sumary__title title--total">Importe total <span>${ subTotal }</span></h3>
                
                <button className="button-buy" onClick={goToCheckout}>Finalizar compra</button>
                <button className="continue-buy" onClick={goToProduct}>Seguir comprando</button>
            </div>
        </section>
    )
}

export default CartOrderSumary
