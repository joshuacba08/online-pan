import React from 'react';
import { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

import './styles/CartItem.css';

const CartItem = ({ bread, breadName, price, qty, itemID, priceSubTotal }) => {

    let history = useHistory();
    const cartContext = useContext(CartContext);

    const { deleteFromCart } = cartContext;

    const handleClick = () => {
        deleteFromCart(itemID);
    }

    return (

        <div className="cart-item-container">
            <div className="cart-item-container__imagen">
                <img src={bread} alt="Imagen del producto" />
            </div>
            <div className="cart-item-container__detail">
                <h2 className="product-name">{breadName}</h2>
                <span className="price">${price}</span>
                <div className="buy-options-container">
                    <p className="item-qty">Cantidad: {qty}</p>
                    {history.location.pathname.includes("/cart") &&
                        <i className="icon--delete icon" onClick={handleClick}></i>
                    }
                </div>
                <div>
                    <span>${priceSubTotal}</span>
                </div>
            </div>
        </div>



    )
}

export default CartItem;
