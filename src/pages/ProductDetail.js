import { useParams } from 'react-router-dom';
import { getProductById } from '../helpers/searchsFunctions';
import ItemDetailContainer from '../components/ItemDetailContainer';

import './styles/ProductDetail.css'


const ProductDetail = () => {

    let { id } = useParams();
    
    return (
        <section className="product-detail-container">  
            <ItemDetailContainer 
                searchFunction = { getProductById }
                field = { "id" }
                value = { id }
            />
        </section>
    )
}

export default ProductDetail;
