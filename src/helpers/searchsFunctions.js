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
                if (doc.exists) {
                    let product = {id: doc.id, data: doc.data()}
                    resolve(product);
                }
            })
            .catch(e => console.log(e));
    });
}

const getProductByName = (value, bbdd) => {
    return new Promise((resolve, reject) => {
        const result = bbdd.filter(product => product.data.productName.includes(value));
        resolve(result);
    });
}

export {
    getAllProducts,
    getProductBy,
    getProductById,
    getProductByName,

}