import React from 'react';
import ItemList from './ItemList';

import  './styles/ItemListContainer.css';

function ItemListContainer() {
    
    return (
        <section className = "item-container">
            <h2 className="item-container__title">Nuestros productos</h2>
            <p className="item-container__paragraph">Elegí entre una gran variedad de panes</p>
            <div className="product-container">
                <ItemList />
            </div>
        </section>
    )
}

export default ItemListContainer;
