import React, {createContext, useState, useEffect } from 'react';
import { dataProducts } from '../data/dataProducts';
import { getAllProducts, getProductById } from '../helpers/searchsFunctions';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addToCart = async (productId,productQty) => {

        let prodAlCart; 
        await getProductById(null, productId).then(response => prodAlCart = response);
            if(!prodAlCart.qty) {
            console.log("funciona en true");
            prodAlCart.qty= productQty;
            setCart([...cart, prodAlCart]);
        } else {
            cart[cart.indexOf(prodAlCart)].qty += productQty;
            setCart([...cart]);
            console.log('entró en el else')
        }

    };

    const deleteFromCart = productId => {

        const cartWithoutProd = cart.filter(prod => prod.id !== productId);
        setCart(cartWithoutProd);

    };

    useEffect( ()=> {
        getAllProducts().then(response => setProducts(response));
        console.log("Productos: ");
        console.log(products);
        console.log("carrito: ");
        console.log(cart);
    }, [cart])

    return (
        <CartContext.Provider
        
            value={{
                cart,
                products,
                addToCart,
                deleteFromCart
            }}

        >
            { children }

        </CartContext.Provider>
    );
};

export default CartContextProvider;