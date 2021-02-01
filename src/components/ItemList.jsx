import React, { useEffect, useState } from 'react'
import Product from './Product';
import './styles/ItemList.css'
// import { getItemsFromFirebase, getItems} from '../helpers/getItems';
// import { getAllProducts } from '../helpers/searchsFunctions';
import loading from '../assets/img/toriPan.gif' 

const ItemList = ({ searchFunction, field, value, }) => {

    const [items, setItems] = useState(null);
    useEffect(() => {
      searchFunction(field, value).then(response => setItems(response));
      // getItemsFromFirebase()
      //   .then(response => setItems(response))
      //   .catch(error => console.log(error))
    },[searchFunction,field,value]);

    return (
        <>
          {
              items? 
              <div className="item-list-container">
              {
                items.map((product)=>{

                    return <div className="item-list-container__item" key={product.id}>
                                <Product 
                                    itemID = {product.id}
                                    bread={product.data.image}
                                    breadName={product.data.productName}
                                    price={product.data.price}
                                    negativeVotes={product.data.negativeVotes}
                                    positiveVotes={product.data.positiveVotes}
                                    stock={product.data.stock}
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
