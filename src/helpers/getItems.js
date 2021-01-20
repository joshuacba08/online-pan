import { getFirestore } from '../data/importData';

const db = getFirestore();

const getItems = (condition, tool) =>{ 
    return new Promise( (resolve, reject) => {
            const productColection = tool(condition);
            console.log('dentro de la promesa 2');
            console.log(productColection);  
            resolve(productColection);
           
    });
}

const getItemsFromDB = () => {
    db.collection('productos').get()
    .then(docs => {
        let arr = [];
        docs.forEach(doc => {
           arr.push({id: doc.id, data: doc.data()})
        })
        return arr;
    })
    .catch(e => console.log(e));
}

const getItemsFromFirebase = () => {
    return new Promise( (resolve, reject) => {
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

export{
    getItems,
    getItemsFromDB,
    getItemsFromFirebase,
}