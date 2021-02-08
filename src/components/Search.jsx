import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import ItemList from './ItemList';
import { getProductByName } from '../helpers/searchsFunctions';
import './styles/Search.css';
import { NavLink } from 'react-router-dom';

function Search() {

    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');
    const cartContext = useContext(CartContext);
    const { products } = cartContext;

    const changeState = () => {
        setShow(!show);
    }

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
                            onChange={(e) => {
                                setQuery(e.target.value.toLowerCase());
                            }}
                        />
                        <NavLink to={`/shop/result/${query}`}
                            className="no-selected"
                            onClick={changeState}>
                            <button className="form-search__button">
                                <i className="search-icon"></i>
                            </button>
                        </NavLink>
                    </form>
                </div>
                {query && <ItemList
                    searchFunction={getProductByName}
                    field={null}
                    value={query}
                    bbdd={products}
                    display={'list'}
                />}
            </section>
        );
    } else {
        return (
            <i className="search-icon" onClick={changeState}></i>
        );
    }
}

export default Search;