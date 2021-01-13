import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import './styles/CartPreview.css'

function CartPreview() {

    const [data, setData] = useContext(CartContext);



    return (
        <div className="cart">
            <div className="cart-container">
                <i className="cart-container__icon"></i>
                <div className="cart-container__box-cart">
                    <span className="cart-title">MI CARRITO</span>
                    <div className="cart-quantity">
                        <span className="cart-quantity__count">{data.qty}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview;