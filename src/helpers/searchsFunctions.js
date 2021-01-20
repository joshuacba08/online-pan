import {products} from "../data/dataProducts";
import { getFirestore } from '../data/importData';

const db = getFirestore();

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        db.collection('productos').get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() })
                })
                resolve(arr);
            })
            .catch(e => console.log(e));
    });
}

const getProductBy = (field,value) => {
    return new Promise((resolve, reject) => {
        db.collection('productos').where(field,"==",value).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() })
                })
                resolve(arr);
            })
            .catch(e => console.log(e));
    });
};


const getProductById = (field, value) => {
    return new Promise((resolve, reject) => {
        db.collection('productos').doc(value).get()
            .then(doc => {
                if(doc.exists){
                    resolve(doc.data());
                }                
            })
            .catch(e => console.log(e));
    });
}

// const getSpecificQuantity = (quantity) => products.filter((product) => product.itemID <= quantity); 

// const getProductById = (id) => products.find((product) => product.itemID === parseInt(id)); 

// const getProductByCategory = (category) => products.filter((product) => product.category === String(category));

// const getProductBySale = (sale) => products.filter( (product) => product.sale === sale);
export {
    getAllProducts,
    getProductBy,
    getProductById,

}