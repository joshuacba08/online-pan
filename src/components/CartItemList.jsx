import React, { useContext } from 'react'
import CartItem from './CartItem';
import loading from '../assets/img/toriPan.gif'  
import './styles/CartItemList.css'
import { CartContext } from '../contexts/CartContext';

const CartItemList = () => {



    const cartContext = useContext(CartContext);

    const { cart } = cartContext;

    console.log(cart);

    return (
        <div>
            {
                cart ?
                    <div className="cart-item-list-container">
                        {
                            cart.map((product) => {
                                return <div className="cart-item-list-container__item" key={product.itemID}>
                                    <CartItem
                                        itemID={product.itemID}
                                        bread={product.bread}
                                        breadName={product.breadName}
                                        price={product.price}
                                        stock={product.stock}
                                        qty = {product.qty}
                                        item = {product}
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
