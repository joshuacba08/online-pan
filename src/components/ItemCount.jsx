import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import ModalAddCart from './ModalAddCart';
import './styles/ItemCount.css';


const ItemCount = ({ stock, initial, addToCart, item, id }) => {

    let history = useHistory();

    
    const [counter, setCounter] = useState(initial);

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
                <button onClick={handleAdd} disabled={counter === stock ? 'disabled' : null}>+</button>
            </div>
            {history.location.pathname.includes("/producto/")&&<>
                <button className="add-cart add-cart--detail-page" onClick={()=> addToCart(id, counter)}>Añadir al carrito</button>
                {/* <ModalAddCart /> */}
            </>}

        </div>
    )
}

export default ItemCount;
