
import { useContext } from 'react';
import CartItemList from '../components/CartItemList';
import CartOrderSumary from '../components/CartOrderSumary';
import { CartContext } from '../contexts/CartContext';
import './styles/Cart.css'

const Cart = () => {

    const cartContext = useContext(CartContext);

    const { cart, subTotal } = cartContext;

    return (
        <div className="cart-page-container">
            <h2 className="cart-page-container__title">Carrito de compras</h2>
            <CartItemList />
            {cart.length!==0&&<CartOrderSumary subTotal={subTotal}/>}
        </div>
    )
}

export default Cart;
