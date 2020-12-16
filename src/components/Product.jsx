import React from 'react';
import PropTypes from 'prop-types';

import './styles/Product.css';
import ProductReview from './ProductReview';

function Product({bread,breadName,price,negativeVotes,positiveVotes}) {

    return (
        <article>
            <div className="img-container">
                <img src={bread} alt="Imagen del producto"/>
            </div>
            <div className="product-detail">
                <p className="product-deatail__name">{breadName}</p>
                <div className="product-detail__container">
                    <ProductReview negativeVotes={negativeVotes} positiveVotes={positiveVotes} />
                    <span>${price}</span>
                </div>
            </div>
        </article>
    )
}

Product.propTypes = {   
    bread: PropTypes.elementType.isRequired,
    breadName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;
