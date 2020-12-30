import React, { useEffect, useState } from 'react'
import Product from './Product';
import './styles/ItemList.css'
import { getItems } from '../helpers/getItems';
import loading from '../assets/img/toriPan.gif' 
const ItemList = ({searchFunction,condition}) => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems(condition, searchFunction).then(response => setItems(response));
    },);

    return (
        <>
          {
              items? 
              <div className="item-list-container">
              {
                items.map((product)=>{
                    return <div className="item-list-container__item" key={product.itemID}>
                                <Product 
                                    itemID = {product.itemID}
                                    bread={product.bread}
                                    breadName={product.breadName}
                                    price={product.price}
                                    negativeVotes={product.negativeVotes}
                                    positiveVotes={product.positiveVotes}
                                    stock={product.stock}
                                />
                            </div>
                })
              }
              </div>:
              <div className="loading-container">
                <p className="loading">Cargando productos...</p>
                <img src={loading} alt=""/>
              </div>
              
          }  
        </>
    )

}

export default ItemList
