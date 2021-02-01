import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import './styles/Search.css'

function Search() {

    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');
    const cartContext = useContext(CartContext);
    const { products } = cartContext;

    const changeState = () => {
        setShow(!show);
    }
    console.log('query');
    console.log(products);

    if (show) {

        return (
            <section className="search-container">
                <div className="search-box">
                    <i className="icon--close icon" onClick={changeState}></i>
                    <p>Escribí lo que estás buscando...</p>
                    <form className="form-search" action="">
                        <input className="form-search__input" type="text"
                            placeholder="Buscá entre nuestros productos" 
                            value={query}
                            onChange={ (e)=> {
                                setQuery(e.target.value);
                            }}
                        />
                        <button className="form-search__button">
                            <i className="search-icon"></i>
                        </button>
                    </form>
                </div>
                {query&&<div className="result-box">Estás buscando {query}</div>}
            </section>
        );
    } else {
        return (
            <i className="search-icon" onClick={changeState}></i>
        );
    }
}

export default Search;