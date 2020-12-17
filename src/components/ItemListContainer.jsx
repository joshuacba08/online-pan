import React from 'react';

import  './styles/ItemListContainer.css';
import Product from './Product';
import panDeMolde from '../assets/img/PanDeMolde.jpg';
import panBaguette from '../assets/img/baguette.jpg';
import melonBread from '../assets/img/MelonBread.jpg'

function ItemListContainer() {
    
    return (
        <section className = "item-container">
            <h2 className="item-container__title">Nuestros productos</h2>
            <p className="item-container__paragraph">Elegí entre una gran variedad de panes</p>
            <div className="product-container">
                <Product 
                    bread={panDeMolde} 
                    breadName="Pan de molde" 
                    price={200.00} 
                    negativeVotes={30} 
                    positiveVotes={90}
                    stock={7}
                />
                <Product bread={panBaguette} 
                    breadName="Pan Baguette" 
                    price={140.00} 
                    negativeVotes={50} 
                    positiveVotes={100}
                    stock={5}
                />
                <Product 
                    bread={melonBread} 
                    breadName="Melon Pan" 
                    price={110.00} 
                    negativeVotes={10} 
                    positiveVotes={100}
                    stock={10}
                />             
            </div>
        </section>
    )
}

export default ItemListContainer;
