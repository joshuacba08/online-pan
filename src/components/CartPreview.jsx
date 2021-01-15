import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import './styles/CartPreview.css'

function CartPreview() {

    const cartContext = useContext(CartContext);

    const {cart} = cartContext;

    let totalCart = cart.map(function(product){
        
        let numCart = +product.qty;
        return numCart;
    });

    
    console.log(totalCart);

    return (
        <div className="cart">
            <div className="cart-container">
                    <i className="cart-container__icon"></i>
                <div className="cart-container__box-cart">
                    <span className="cart-title">MI CARRITO</span>
                    <div className="cart-quantity">
                        <span className="cart-quantity__count">{totalCart}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview;