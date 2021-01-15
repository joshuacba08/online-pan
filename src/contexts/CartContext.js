import React, {createContext, useState, useEffect } from 'react';
import { dataProducts } from '../data/dataProducts';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addToCart = (productId,productQty) => {

        const prodAlCart = products.filter(prod => prod.itemID === productId)[0];
        if (!prodAlCart.qty) {
            console.log("funciona en true");
            prodAlCart.qty= productQty;
            setCart([...cart, prodAlCart]);
        } else {
            cart[cart.indexOf(prodAlCart)].qty += productQty;
            setCart([...cart]);
        }

    };

    const deleteFromCart = productId => {

        const cartWithoutProd = cart.filter(prod => prod.itemID !== productId);
        setCart(cartWithoutProd);

    };

    useEffect( ()=> {
        setProducts(dataProducts);
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