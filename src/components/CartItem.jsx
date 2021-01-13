import React from 'react';
import { priceForQty } from '../helpers/calculationFunctions';
import ItemCount from './ItemCount';
import './styles/CartItem.css';

const CartItem = ({bread, breadName, price, stock, qty}) => {
    return (
        <div className="cart-item-container">
            <div className="cart-item-container__imagen">
                <img src={bread} alt="Imagen del producto"/>
            </div>
            <div className="cart-item-container__detail">
                <h2 className="product-name">{breadName}</h2>
                <span className="price">${price}</span>
                <div className="buy-options-container">
                    <ItemCount initial={1} stock = {stock} />
                    <i className="icon--delete icon"></i>
                </div>
                <div>
                    <span>${priceForQty(price,qty)}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
