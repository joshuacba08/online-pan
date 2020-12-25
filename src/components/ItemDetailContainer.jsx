import React, { useEffect, useState } from 'react'
import { getItems } from "../helpers/getItems";
import ItemDetail from './ItemDetail';
const ItemDetailContainer = props => {

    const [product, setProduct] = useState(null);
    //Estoy usando helpers para dejar más limpio el código.    
    useEffect(() => {
        getItems(true).then(response => setProduct(response))
    }, []);
    return (
        <>  {
                product?
                <>
                    <ItemDetail item = {product[0]} />
                    <ItemDetail item={product[1]} />
                    {

                    }
                </> :
                <p className="loading">Cargando producto</p>
            }       
        </>
    )
}

export default ItemDetailContainer;
