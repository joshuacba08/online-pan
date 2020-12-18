import React from 'react'
import PropTypes from 'prop-types'

import "./styles/ProductReview.css"

const ProductReview = props => {
    //En el futuro debería traer votos de una base de datos
    const total = props.negativeVotes + props.positiveVotes;
    const positivePorcent = props.positiveVotes * 100 / total;
    const negativePorcent = props.negativeVotes * 100 / total;
    const stars = [];
    const addStars = () => {
        let positiveStar = Math.round(positivePorcent*5/100);
        let negativeStar = Math.round(negativePorcent*5/100);
        for (let index = 0; index < positiveStar; index++) {
            stars.push("positive-star");
        }
        for (let index = 0; index < negativeStar; index++) {
            stars.push("negative-star");
        }
    }
    addStars();
return (
    <div>
        <ul className="review-container">
            {
                stars.map((category,index) => {
                    return <li key={index}>
                        <i className={category}></i>
                        </li>
                })
            }
        </ul>

    </div>
)
};
ProductReview.propTypes = {
    positiveVotes: PropTypes.number.isRequired,
    negativeVotes: PropTypes.number.isRequired,
};

export default ProductReview
