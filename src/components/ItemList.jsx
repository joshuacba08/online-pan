import React, { useEffect, useState } from 'react'
import panDeMolde from '../assets/img/PanDeMolde.jpg';
import panBaguette from '../assets/img/baguette.jpg';
import melonBread from '../assets/img/MelonBread.jpg'
import Product from './Product';
import './styles/ItemList.css'
const ItemList = () => {
    const [items, setItems] = useState([]);
    const productList = [
        {   
            itemID:1,
            bread: panDeMolde,
            breadName: 'Pan de molde',
            price: 200,
            negativeVotes: 30, 
            positiveVotes: 90,
            stock: 7,
        }, 
        {
            itemID: 2,
            bread: panBaguette,
            breadName: 'Pan baguette',
            price: 140,
            negativeVotes: 50,
            positiveVotes: 100,
            stock: 5,
        },
        {
            itemID: 3,
            bread: melonBread,
            breadName: 'Melon pan',
            price: 110,
            negativeVotes: 10,
            positiveVotes: 100,
            stock: 10,
        },
    ];

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 3000)
    });

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch (error) {
            alert('No podemos mostrar los productos en este momento');
        }
    };

    useEffect(() => {
        getProducstFromDB();
    }, [])
    return (
        <>
          {
              items.length ? 
              <>
              {
                items.map((product)=>{
                    return <div className="item-list-container" key={product.itemID}>
                                <Product 
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
              </>:
              <p className="loading">Cargando productos...</p>
              
          }  
        </>
    )

}

export default ItemList
