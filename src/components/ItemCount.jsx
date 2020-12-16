import React, { useState } from 'react';
import './styles/ItemCount.css';


const ItemCount = props => {
    console.log(props.stock);
    const [counter, setCounter] = useState(1);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubtract = () => {
        setCounter(counter - 1);
    }
    return (
        <div className="item-count-main">
            <div className ="count-container">
                <button onClick={handleSubtract} disabled={counter===1 ? 'disabled' : null}>-</button>
                <span className="count-container__number">{ counter }</span>
                <button onClick={handleAdd} disabled={counter === props.stock ? 'disabled' : null}>+</button>
            </div>
            <button className="add-cart">Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;
