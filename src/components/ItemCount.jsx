import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import ModalAddCart from './ModalAddCart';
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
        // setCounter (props.initial);
        // if (history.location.pathname.includes("/producto/"))
        //     history.push("/cart");
    }
    
    return (
        <div className="item-count-main">
            <div className ="count-container">
                <button onClick={handleSubtract} disabled={counter===1 ? 'disabled' : null}>-</button>
                <span className="count-container__number">{ counter }</span>
                <button onClick={handleAdd} disabled={counter === props.stock ? 'disabled' : null}>+</button>
            </div>
            {history.location.pathname.includes("/producto/")&&<>
                <button className="add-cart add-cart--detail-page" onClick={addCart}>Añadir al carrito</button>
                {/* <ModalAddCart /> */}
            </>}

        </div>
    )
}

export default ItemCount;
