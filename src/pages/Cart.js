import CartItemList from '../components/CartItemList';
import './styles/Cart.css'


const Cart = () => {
    return (
        <div className="cart-page-container">
            <h2 className="cart-page-container__title">Carrito de compras</h2>
            <CartItemList />
        </div>
    )
}

export default Cart;
