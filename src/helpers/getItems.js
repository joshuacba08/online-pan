
const getItems = (condition, tool) =>{ 
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const productColection = tool(condition);
            resolve(productColection)     
        }, 1675);
    });
}

export{
    getItems,
}