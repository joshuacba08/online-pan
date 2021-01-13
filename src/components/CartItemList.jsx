import React, { useContext, useEffect, useState } from 'react'
import { getItems } from '../helpers/getItems';
import { getSpecificQuantity } from '../helpers/searchsFunctions';
import CartItem from './CartItem';
import loading from '../assets/img/toriPan.gif'  
import './styles/CartItemList.css'
import { CartContext } from '../contexts/CartContext';

const CartItemList = () => {

    const [data, setData] = useContext(CartContext);

    const items = data.items;

    console.log(items);

    return (
        <div>
            {
                items ?
                    <div className="cart-item-list-container">
                        {
                            items.map((product) => {
                                return <div className="cart-item-list-container__item" key={product.itemID}>
                                    <CartItem
                                        itemID={product.itemID}
                                        bread={product.bread}
                                        breadName={product.breadName}
                                        price={product.price}
                                        stock={product.stock}
                                        qty = {product.qty}
                                    />
                                </div>
                            })
                        }
                    </div> :
                    <div className="loading-container">
                        <p className="loading">Cargando productos...</p>
                        <img src={loading} alt="" />
                    </div>

            }
        </div>
    )
}

export default CartItemList
