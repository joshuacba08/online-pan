import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import './styles/Product.css';
import ProductReview from './ProductReview';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { capitalize } from '../helpers/formatFunctions';

function Product({ itemID, bread, breadName, price, negativeVotes, positiveVotes, display }) {

    const [button, setbutton] = useState("Añadir al carrito")

    const cartContext = useContext(CartContext);
    const { addToCart, cart } = cartContext;


    const onAdd = () => {
        addToCart(itemID, 1)
        if (button === "Añadir al carrito")
            setbutton("Añadido")
        if (cart.length > 0) {
        }

    }

    return (
        <>
            {display === 'grid' &&
                <article className="product-main-container">
                    <div className="img-container">
                        <img src={bread} alt="Imagen del producto" />
                    </div>
                    <div className="product-detail">
                        <Link to={`/producto/${itemID}`}>
                            <p className="product-deatail__name">{capitalize(breadName)}</p>
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
            }
            {display === 'list' &&
                <article className="product-main-container display--list">
                    <div className="product-detail product-detail--list">
                        <div className="img-container--list">
                            <img src={bread} alt="Imagen del producto" />
                        </div>
                        <div className="detail-box--list">
                            <Link to={`/producto/${itemID}`}>
                                <p className="product-deatail__name">{capitalize(breadName)}</p>
                            </Link>
                            <div className="product-detail__container--list">
                                <ProductReview negativeVotes={negativeVotes} positiveVotes={positiveVotes} />
                                <span>${price}</span>
                            </div>
                        </div>
                        <button onClick={onAdd} className="add-cart add-cart--main-page" >
                            <span>{button}</span>
                        </button>
                    </div>
                </article>
            }
        </>
    )
}

Product.propTypes = {
    bread: PropTypes.string.isRequired,
    breadName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default Product;
