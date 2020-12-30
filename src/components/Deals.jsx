import React from 'react'
import { getProductBySale } from '../helpers/searchsFunctions';
import ItemDetailContainer from './ItemDetailContainer';
import './styles/Deals.css';

const Deals = props => {
    return (
        <section className="deals-container">
            <h2 className="deals-container__title">Ofertas del día</h2>
            <ItemDetailContainer 
                searchFunction={getProductBySale}
                condition = {true}
            />
        </section>
    )
}

export default Deals;
