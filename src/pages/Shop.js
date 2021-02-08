import React, { useContext, useState } from 'react'
import ItemList from '../components/ItemList'
import './styles/Shop.css';
import { getAllProducts, getProductBy, getProductByName} from '../helpers/searchsFunctions';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import DisplayControl from '../components/DisplayControl';

const Shop = () => {
    
    const { name_category } = useParams();
    const { query } = useParams();
    const cartContext = useContext(CartContext);
    const { products } = cartContext;
    const [display, setDisplay] = useState('grid')

    const changeDisplay = (displaySelected) => {
        if (display==="grid") {
            setDisplay(displaySelected)
        } else {
            setDisplay(displaySelected)
        }
    }

    
    return (
        <section className="main-shop">
            <DisplayControl
                category = {name_category}
                query={query}
                changeDisplay={changeDisplay}
            />
            { query !== undefined ? <ItemList
                searchFunction={getProductByName}
                field={null}
                value={query}
                bbdd={products}
                display={ display }
            />:
                   
                    name_category===undefined ?
                    <>
                        <ItemList
                            searchFunction={getAllProducts}
                            condition={null}
                            display={ display }
                            
                        />
                    </>:
                        <ItemList
                            searchFunction={ getProductBy }
                            field={ "category" }
                            value={ name_category }
                        display={ display }
                        />
                
            }
        </section>
    )
}

export default Shop
