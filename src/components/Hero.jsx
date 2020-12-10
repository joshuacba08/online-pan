import React, { useState } from 'react';
import './styles/Hero.css'

function Hero() {

    return (
        <section className="hero">
            <div className="hero__slide--1">
                <h2 className="hero__title">Porque el pan<br/>no puede faltar</h2>
                <p className="hero__paragraph">Encontrá el pan perfecto para acompañar tus mañanas</p>
                <button className="hero__button">Comprar ahora</button>
            </div>
        </section>    
    );
}

export default Hero;