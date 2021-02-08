import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles/CartOrderSumary.css';

const CartOrderSumary = ({ subTotal, showMini }) => {

    let history = useHistory();
    const goToProduct = () => {
        history.push("/shop");
        showMini !== null && showMini();
    }
    const goToCheckout = () => {
        history.push("/checkout");
        showMini !== null && showMini();

    }
    const goToCart = () => {
        history.push("/cart");
        showMini !== null && showMini();
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
                <h3 className="cart-order-sumary__title title--total">Importe total <span>${subTotal}</span></h3>
                {
                    history.location.pathname.includes("/cart") &&
                    <button className="button-buy" onClick={goToCheckout}>Finalizar compra</button>
                }
                {
                    !history.location.pathname.includes("/cart") &&
                    <button className="button-buy" onClick={goToCart}>Ver Carrito</button>
                }

                <button className="continue-buy" onClick={goToProduct}>Seguir comprando</button>
            </div>
        </section>
    )
}

export default CartOrderSumary
