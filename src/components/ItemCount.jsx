import React, { useState } from 'react';
import './styles/ItemCount.css';


const ItemCount = props => {

    console.log(props.onAdd);
    const [counter, setCounter] = useState(props.initial);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubtract = () => {
        setCounter(counter - 1);
    }
    const addCart = () => {
        props.onAdd(counter);
        setCounter (props.initial);
    }
    return (
        <div className="item-count-main">
            <div className ="count-container">
                <button onClick={handleSubtract} disabled={counter===1 ? 'disabled' : null}>-</button>
                <span className="count-container__number">{ counter }</span>
                <button onClick={handleAdd} disabled={counter === props.stock ? 'disabled' : null}>+</button>
            </div>
            <button className="add-cart" onClick={addCart}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;
