import React from 'react'
import ItemList from '../components/ItemList'
import './styles/Shop.css';
import { getAllProducts, getProductBy} from '../helpers/searchsFunctions';
import { useParams } from 'react-router-dom';

const Shop = () => {
    
    const { name_category } = useParams();

    
    return (
        <section className="main-shop">
            {   
                name_category===undefined ?
                <>
                    <ItemList
                        searchFunction={getAllProducts}
                        condition={null}
                        
                    />
                </>:
                    <ItemList
                        searchFunction={ getProductBy }
                        field={ "category" }
                        value={ name_category }
                    />
            }
        </section>
    )
}

export default Shop
