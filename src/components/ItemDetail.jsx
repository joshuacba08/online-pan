import { useContext, useReducer } from 'react'
import { CartContext } from '../contexts/CartContext';
import ItemCount from './ItemCount'
import ProductReview from './ProductReview'
import './styles/ItemDetail.css'

const ItemDetail = ({item}) => {


    const cartContext = useContext(CartContext);

    const { addToCart } = cartContext;


    return (
        <div className="item-detail-container">
            <div className="item-detail-container__img">
                <img src={item.bread} alt="imagen del producto en oferta"/>
            </div>
            <article className="item-detail-container__detail">
                <h2 className="product-name">{item.breadName}</h2>
                <span className="price">${item.price}</span>
                <ProductReview negativeVotes={item.negativeVotes} positiveVotes={item.positiveVotes} />
                
                <p className="product-description">{item.description}</p>
                <ItemCount 
                    stock={item.stock}
                    initial={1}
                    addToCart={ addToCart }
                    item= { item }
                />
            </article>
        </div>
    )
}

export default ItemDetail
