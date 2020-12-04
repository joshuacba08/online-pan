import  './styles/BarNav.css';
import confLogo from '../assets/img/Melon.png';
import CartPreview from './CartPreview';
import Search from './Search';
 
function BarNav () {
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
            <Search />
            <CartPreview /> 
        </header>
    )
}

export default BarNav;