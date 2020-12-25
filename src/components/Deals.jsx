import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import './styles/Deals.css';

const Deals = props => {
    return (
        <section className="deals-container">
            <h2 className="deals-container__title">Ofertas del día</h2>
            <ItemDetailContainer />
        </section>
    )
}

export default Deals;
