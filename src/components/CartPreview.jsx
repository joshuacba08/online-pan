import './styles/CartPreview.css'

function CartPreview() {
    return (
        <div className="cart">
            <div className="cart-container">
                <i className="cart-container__icon"></i>
                <div className="cart-container__box-cart">
                    <span className="cart-title">MI CARRITO</span>
                    <div className="cart-quantity">
                        <span className="cart-quantity__count">0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview;