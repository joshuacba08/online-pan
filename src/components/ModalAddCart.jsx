import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
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

const ModalAddCart = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        console.log('closing...')
        setIsOpen( false );
    }
    let history = useHistory();
     const watchCart = () => {
         history.push("/cart");
     }

    return (
        <Modal
            isOpen={ isOpen }
            // onAfterOpen={afterOpenModal}
            onRequestClose={ closeModal }
            style={ customStyles }
            // className = "modal"
            overlayClassName = "modal-fondo"
        >   
            <div className="modal-container">
                <icon className="icon--close icon"></icon>
                <h2><i className="icon--check icon"></i> Añadido a tu carrito</h2>
                <hr/>
                <p>Hola Mundirijillo</p>
                <button onClick={watchCart} className="watch-cart">Ver carrito</button>
                <button className="continue-buy">Seguir comprando</button>
            </div>

        </Modal>
    )
}

export default ModalAddCart
