import { useState } from 'react';
import ModalAddCart from './ModalAddCart';

import './styles/ItemCount.css';


const ItemCount = ({ stock, initial, addToCart, id, item, limitStock }) => {




    const [counter, setCounter] = useState(initial);
    const [showModal, setShowModal] = useState(false)

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleClick = () => {
        addToCart(id, counter);
        if (limitStock === false) {
            if (showModal === false) {
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        }
    }


    return (
        <div className="item-count-main">
            <div className="count-container">
                <button onClick={handleSubtract} disabled={counter === 1 ? 'disabled' : null}>-</button>
                <span className="count-container__number">{counter}</span>
                <button onClick={handleAdd} disabled={counter === stock ? 'disabled' : null}>+</button>
            </div>

            <button className="add-cart add-cart--detail-page" onClick={handleClick}>Añadir al carrito</button>
            {
                showModal && <ModalAddCart
                    item={item}
                    id={id}
                    qty={counter}
                />
            }

        </div>
    )
}

export default ItemCount;
