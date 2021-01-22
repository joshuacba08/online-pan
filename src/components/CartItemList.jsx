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
        <>
            {
                cart.length>0 ?
                    <div className="cart-item-list-container">
                        {
                            cart.map((product) => {
                                return <div className="cart-item-list-container__item" key={product.id}>
                                    <CartItem
                                        itemID={product.id}
                                        bread={product.data.image}
                                        breadName={product.data.productName}
                                        price={product.data.price}
                                        stock={product.data.stock}
                                        qty = {product.qty}
                                        priceSubTotal = {product.priceSubTotal}
                                        // item = {product}
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
        </>
    )
}

export default CartItemList
