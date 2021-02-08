import React from 'react'
import { getProductBy } from '../helpers/searchsFunctions';
import ItemDetailContainer from './ItemDetailContainer';
import './styles/Deals.css';

const Deals = () => {
    return (
        <section className="deals-container">
            <h2 className="deals-container__title">Ofertas del día</h2>
            <ItemDetailContainer
                searchFunction={getProductBy}
                field={"sale"}
                value={true}
            />
        </section>
    )
}

export default Deals;
