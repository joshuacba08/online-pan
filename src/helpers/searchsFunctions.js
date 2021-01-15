import {products} from "../data/dataProducts";


const getAllProducts = () => {
    return products;
}

const getSpecificQuantity = (quantity) => products.filter((product) => product.itemID <= quantity); 

const getProductById = (id) => products.find((product) => product.itemID === parseInt(id)); 

const getProductByCategory = (category) => products.filter((product) => product.category === String(category));

const getProductBySale = (sale) => products.filter( (product) => product.sale === sale);
export {
    getAllProducts,
    getSpecificQuantity,
    getProductByCategory,
    getProductBySale,
    getProductById,

}