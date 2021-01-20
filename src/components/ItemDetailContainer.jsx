import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ searchFunction, field, value }) => {

    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        searchFunction(field,value).then(response => setProduct(response))
    }, [searchFunction, field, value]);
    console.log(field);
    console.log(product);

    return (
        <>  {
                product?
                <>
                    {!Array.isArray(product) && <ItemDetail item={product} id= { value } />}
                    {product.length > 1 && <ItemDetail item={product[0].data} id = { value } />}
                </> :
                <>
                    <p className="loading">Cargando producto</p>
                </>
            }       
        </>
    )
}

export default ItemDetailContainer;
