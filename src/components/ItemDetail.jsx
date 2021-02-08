import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import { capitalize } from '../helpers/formatFunctions';
import ItemCount from './ItemCount'
import ProductReview from './ProductReview'
import './styles/ItemDetail.css'

const ItemDetail = ({ item, id }) => {

    const cartContext = useContext(CartContext);

    const { addToCart, limitStock } = cartContext;


    return (
        <div className="item-detail-container">
            <div className="item-detail-container__img">
                <img src={item.image} alt="imagen del producto en oferta"/>
            </div>
            <article className="item-detail-container__detail shadow">
                <h2 className="product-name">{capitalize(item.productName)}</h2>
                <span className="price">${item.price}</span>
                <ProductReview negativeVotes={item.negativeVotes} positiveVotes={item.positiveVotes} />
                
                <p className="product-description">{item.description}</p>
                
                    <ItemCount 
                        stock={item.stock}
                        initial={1}
                        addToCart={ addToCart }
                        id = { id }
                    />
                    {limitStock && <div className='limit-exeeded box-error'>
                        Intenta ingresar una cantidad menor
                </div>}
            
            </article>
        </div>
    )
}

export default ItemDetail;
