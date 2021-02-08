import React, { useEffect, useState } from 'react'
import Product from './Product';
import './styles/ItemList.css'
import loading from '../assets/img/toriPan.gif'

const ItemList = ({ searchFunction, field, value, bbdd, display }) => {

  const [items, setItems] = useState(null);

  useEffect(() => {
    //Si field es distinto de null entonces va a buscar por campo
    field !== null && searchFunction(field, value).then(response => setItems(response));
    bbdd && searchFunction(value, bbdd).then(response => setItems(response));

  }, [searchFunction, field, value, bbdd]);



  return (
    <>
      {
        items ?
          <div className={`item-list-container--${display}`}>
            {
              items.map((product) => {

                return <div className="item-list-container__item" key={product.id}>
                  <Product
                    itemID={product.id}
                    bread={product.data.image}
                    breadName={product.data.productName}
                    price={product.data.price}
                    negativeVotes={product.data.negativeVotes}
                    positiveVotes={product.data.positiveVotes}
                    stock={product.data.stock}
                    display={display}
                  />
                </div>
              })
            }
          </div> :
          <div className="loading-container">
            <p className="loading">Cargando productos...</p>
            <img src={loading} alt="" />
          </div>

      }
    </>
  )

}

export default ItemList
