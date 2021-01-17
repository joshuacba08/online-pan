import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import './styles/Product.css';
import ProductReview from './ProductReview';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function Product({itemID,bread,breadName,price,negativeVotes,positiveVotes}) {
    
    const [button, setbutton] = useState("Añadir al carrito")
    
    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;

    const onAdd = () => {
        addToCart(itemID,1)
        if(button==="Añadir al carrito")
        setbutton("Añadido")
    }
    return (
        <article>
            <div className="img-container">
                <img src={bread} alt="Imagen del producto"/>
            </div>
            <div className="product-detail">
                <Link to ={`/producto/${itemID}`}>
                    <p className="product-deatail__name">{breadName}</p>
                </Link>
                <div className="product-detail__container">
                    <ProductReview negativeVotes={negativeVotes} positiveVotes={positiveVotes} />
                    <span>${price}</span>
                </div>
                <button onClick={onAdd} className="add-cart add-cart--main-page" >
                    <span>{button}</span>
                </button>
            </div>
        </article>
    )
}

Product.propTypes = {   
    bread: PropTypes.elementType.isRequired,
    breadName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default Product;
