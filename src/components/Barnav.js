import  './styles/Barnav.css';
import confLogo from '../assets/img/Melon.png';
import CartPreview from './CartPreview';

 
function Barnav () {
    return(
        <header>
            <div className="logo">
                <img src={confLogo} alt="Logo de la Marca"/>
            </div>
            <nav>
                <ul className="main-nav">
                    <li>
                        <a href='/'>INICIO</a>
                    </li>
                    <li>
                        <a href='/'>PRODUCTOS</a>
                    </li>
                    <li>
                        <a href='/'>BLOG</a>
                    </li>
                    <li>
                        <a href='/'>CONTACTO</a>
                    </li>
                </ul>
            </nav>
            <div className="buscador"></div>
            <CartPreview /> 
        </header>
    )
}

export default Barnav;