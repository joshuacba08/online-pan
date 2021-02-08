import { NavLink } from 'react-router-dom';
import './styles/Hero.css'

function Hero() {

    return (
        <section className="hero">
            <div className="hero__slide background-image"></div>
            <div className="hero__content">
                <h2 className="hero__title">Porque el pan<br />no puede faltar</h2>
                <p className="hero__paragraph">Encontrá el pan perfecto para acompañar tus mañanas</p>
                <div className="swipe">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="7 7 12 12 17 7" />
                        <polyline points="7 13 12 18 17 13" />
                    </svg>
                </div>
                <NavLink to='/shop'>
                    <button className="hero__button">Comprar ahora</button>
                </NavLink>
            </div>
        </section>
    );
}

export default Hero;