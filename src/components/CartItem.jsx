import React from 'react';
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import { priceForQty } from '../helpers/calculationFunctions';

import './styles/CartItem.css';

const CartItem = ({bread, breadName, price, stock, qty, itemID, priceSubTotal}) => {

    const cartContext = useContext(CartContext);

    const { cart, deleteFromCart } = cartContext;


    return (

            <div className="cart-item-container">
                <div className="cart-item-container__imagen">
                    <img src={bread} alt="Imagen del producto"/>
                </div>
                <div className="cart-item-container__detail">
                    <h2 className="product-name">{breadName}</h2>
                    <span className="price">${price}</span>
                    <div className="buy-options-container">
                        <p className="item-qty">Cantidad: {qty}</p>
                        {/* <ItemCount initial={qty} stock = {stock} /> */}
                        <i className="icon--delete icon" onClick={()=> deleteFromCart(itemID)}></i>
                    </div>
                    <div>
                        <span>${priceSubTotal}</span>
                    </div>
                </div>
            </div>
                


    )
}

export default CartItem;
