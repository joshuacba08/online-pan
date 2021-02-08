import React, { useContext, useState } from 'react'
import CartItemList from './CartItemList';
import { CartContext } from '../contexts/CartContext';
import CartOrderSumary from './CartOrderSumary';

import './styles/CartMini.css'

const CartMini = () => {

    const cartContext = useContext(CartContext);

    const { subTotal } = cartContext;
    const [showMini, setShowMini] = useState(false);
    const changeState = () => {
        setShowMini(!showMini);
    }
    return (
            <>
            {showMini===true&&
            <>
                <i className="cart-container__icon icon" onClick={ changeState }></i>  
                <section className="mini-cart">
                    <div className="mini-cart-container">
                        <i className="icon--close icon" onClick={changeState}></i>
                        <h3 className="mini-cart__title">Tu Carrito</h3>
                        <CartItemList />
                        <CartOrderSumary subTotal={subTotal} showMini={changeState}/>
                    </div>                        
                </section>
            </>
            }
            {showMini === false && <i className="cart-container__icon" onClick={changeState}></i>
            }
        </>
    )
}

export default CartMini;
