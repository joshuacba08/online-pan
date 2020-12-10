import React, { useState } from 'react';
import './styles/Search.css'

function Search() {
    const [show, setShow] = useState(false);
    const changeState = () => {
        setShow(!show);
    }
    if (show) {
        return (
            <section className="search-container">
                <div className="search-box">
                    <i className="close-icon" onClick={changeState}></i>
                    <p>Escribí lo que estás buscando...</p>
                    <form className="form-search" action="">
                        <input className="form-search__input" type="text"
                            placeholder="Buscá entre nuestros productos" />
                        <button className="form-search__button">
                            <i className="search-icon"></i>
                        </button>
                    </form>
                </div>
            </section>
        );
    } else {
        return (
            <i className="search-icon" onClick={changeState}></i>
        );
    }
}

export default Search;