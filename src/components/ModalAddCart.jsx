import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import './styles/ModalAddCart.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '290px',
        height: 'auto',
    }
};
Modal.setAppElement('#root');

const ModalAddCart = ({ item, id, qty }) => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }
    let history = useHistory();
    const watchCart = () => {
        history.push("/cart");
    }
    const continueBuy = () => {
        history.push("/shop");
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            overlayClassName="modal-fondo"
        >
            <div className="modal-container">
                <i onClick={closeModal} className="icon--close icon"></i>
                <h2><i className="icon--check icon"></i> Añadido a tu carrito</h2>
                <hr />
                <CartItem
                    itemID={id}
                    bread={item.image}
                    breadName={item.productName}
                    price={item.price}
                    stock={item.stock}
                    qty={qty}
                    priceSubTotal={item.price * qty}
                    closeModal={closeModal}
                />
                <button onClick={watchCart} className="watch-cart">Ver carrito</button>
                <button onClick={continueBuy} className="continue-buy">Seguir comprando</button>
            </div>

        </Modal>
    )
}

export default ModalAddCart
