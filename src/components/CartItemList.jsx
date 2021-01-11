import React, { useEffect, useState } from 'react'
import { getItems } from '../helpers/getItems';
import { getSpecificQuantity } from '../helpers/searchsFunctions';
import CartItem from './CartItem';
import loading from '../assets/img/toriPan.gif'  
import './styles/CartItemList.css'

const CartItemList = () => {

    const [items, setItems] = useState(null);
    // let cartList = []
    useEffect(() =>{
        getItems(3,getSpecificQuantity).then(response => setItems(response));
    },[]);

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
