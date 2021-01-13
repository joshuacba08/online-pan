import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import ItemCount from './ItemCount'
import ProductReview from './ProductReview'
import './styles/ItemDetail.css'

const ItemDetail = ({item}) => {

    const [data, setData] = useContext(CartContext);

    const onAdd = (counter) => {
        const itemSelect = item;

        if (data.items.includes(itemSelect)){
            setData({
                ...data, 
                qty: data.qty + counter,
            });
            let itemRepetido = parseInt(data.items.indexOf(itemSelect));
            data.items[itemRepetido].qty+=counter;
            console.log(data.items[itemRepetido]);
        }
        else{
        itemSelect.qty = 1;
        setData({
            ...data,
            qty: data.qty + counter,
            items: [...data.items, itemSelect],
        });
        }
        console.log(data.items);
    };
  
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
                    onAdd={onAdd}
                />
            </article>
        </div>
    )
}

export default ItemDetail
