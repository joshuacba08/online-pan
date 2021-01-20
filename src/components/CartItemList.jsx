import React, { useContext } from 'react'
import CartItem from './CartItem';
import './styles/CartItemList.css'
import { CartContext } from '../contexts/CartContext';
import noBread from '../assets/img/noBread.gif'
import { useHistory } from 'react-router-dom';

const CartItemList = () => {

    const cartContext = useContext(CartContext);

    const { cart } = cartContext;

    let history = useHistory();
    const goToProduct = () => {
        history.push("/shop");
    }
    console.log('minicart');
    console.log(cart);

    return (
        <div>
            {
                cart.length>0 ?
                    <div className="cart-item-list-container">
                        {
                            cart.map((product) => {
                                return <div className="cart-item-list-container__item" key={product.itemID}>
                                    <CartItem
                                        itemID={product.id}
                                        bread={product.image}
                                        breadName={product.productName}
                                        price={product.price}
                                        stock={product.stock}
                                        qty = {product.qty}
                                        item = {product}
                                    />
                                </div>
                            })
                        }
                    </div> :
                    <div className="no-bread">
                        <p className="no-bread__message">Tu carrito está vacío 😩</p>
                        <div className="no-bread__img">
                            <img src={noBread} alt="" />
                        </div>
                        <button onClick={goToProduct} className="go-to-product">Seguir comprando</button>
                        
                    </div>

            }
        </div>
    )
}

export default CartItemList
