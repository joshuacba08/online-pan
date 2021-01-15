import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartMini from './CartMini';

import './styles/CartPreview.css'

function CartPreview() {

    const cartContext = useContext(CartContext);

    const {cart} = cartContext;

    let totalCart = 0;
    totalCart = cart.map(function(product){
        
        let numCart = +product.qty;
        return numCart;
    });

    
    console.log(totalCart);

    return (
        <div className="cart">
            <div className="cart-container">
                {cart.length>0&&<CartMini />}
                {cart.length === 0 && <i className="cart-container__icon gren"></i>}
                <div className="cart-container__box-cart">
                    <Link to="/cart">
                        <span className="cart-title">MI CARRITO</span>
                    </Link>
                    <div className="cart-quantity">
                        <span className="cart-quantity__count">{totalCart}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview;