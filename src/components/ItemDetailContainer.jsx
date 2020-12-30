import React, { useEffect, useState } from 'react'
import { getItems } from "../helpers/getItems";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ searchFunction, condition }) => {

    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        getItems(condition,searchFunction).then(response => setProduct(response))
    }, []);

    return (
        <>  {
                product?
                <>
                    {!Array.isArray(product) && <ItemDetail item={product} />}
                    {product.length > 1 && <ItemDetail item={product[0]} />}
                </> :
                <>
                    <p className="loading">Cargando producto</p>
                </>
            }       
        </>
    )
}

export default ItemDetailContainer;
