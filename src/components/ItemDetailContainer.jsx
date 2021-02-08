import React, { useEffect, useState } from 'react'
import DealsControl from './DealsControl';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ searchFunction, field, value }) => {

    const [product, setProduct] = useState(null);
    const [index, setIndex] = useState(0);

    const handleAdd = () => {

        if (index < product.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }   

    }

    const handleSubtract = () => {

        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(product.length - 1);
        }

    }

    
    useEffect(() => {
        searchFunction(field,value).then(response => setProduct(response))
    }, [searchFunction, field, value]);



    return (
        <>  {
                product?
                <>
                    {!Array.isArray(product) && 
                        <ItemDetail 
                            item={product} 
                            id= { value }
                    />}
                    {product.length > 1 &&<>
                        <DealsControl 
                            right = { handleAdd }
                            left = { handleSubtract }
                        />
                        <ItemDetail 
                            item={product[index].data} 
                            id = { product[index].id } 
                        />
                    </>}
                </> :
                <>
                    <p className="loading">Cargando producto</p>
                </>
            }       
        </>
    )
}

export default ItemDetailContainer;
