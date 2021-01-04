import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/ItemCount.css';


const ItemCount = props => {

    let history = useHistory();
    
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
        if (history.location.pathname.includes("/producto/"))
            history.push("/cart");
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
