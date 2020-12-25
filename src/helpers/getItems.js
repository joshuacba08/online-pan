import { getProductBySale } from "./searchsFunctions";

const getItems = (condition) =>{ 
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const onSaleProduct = getProductBySale(true);
            resolve(onSaleProduct)      
        }, 2000);
    });
}

export{
    getItems,
}