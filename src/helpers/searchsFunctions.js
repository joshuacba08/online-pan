import {products} from "../data/dataProducts";

//Voy a implementar más adelante estas funciones para buscar y filtrar productos:
// const getProductById = (id) => products.find((product) => product.id === id);

//Esta función devuelve un array con los productos que estén de oferta o no de acuerdo al valor que se pase como parámetro
const getProductBySale = (sale) => products.filter( (product) => product.sale === sale);
export {
    getProductBySale,
}