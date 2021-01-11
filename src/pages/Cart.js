import React from 'react'
import CartItemList from '../components/CartItemList';
import './styles/Cart.css'

const Cart = () => {
    return (
        <div className="cart-page-container">
            <CartItemList />
        </div>
    )
}

export default Cart;
