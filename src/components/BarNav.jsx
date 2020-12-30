import  './styles/BarNav.css';
import confLogo from '../assets/img/Melon.png';
import CartPreview from './CartPreview';
import Search from './Search';
import { Link, NavLink } from 'react-router-dom';

 
function BarNav () {
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={confLogo} alt="Logo de la Marca"/>
                </Link>
            </div>
            <nav>
                <ul className="main-nav">
                    <li>
                        <NavLink exact to='/' activeClassName="selected" className="no-selected">INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop' activeClassName="selected" className="no-selected">PRODUCTOS<span className="down-arrow"></span></NavLink>
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <NavLink to='/shop/panaderia' activeClassName="selected" className="no-selected">Panadería</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/shop/pasteleria' activeClassName="selected" className="no-selected">Pastelería</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/shop/navidad' activeClassName="selected" className="no-selected">Navideños</NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to='/Blog' activeClassName="selected" className="no-selected">BLOG</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' activeClassName="selected" className="no-selected">CONTACTO</NavLink>
                    </li>
                </ul>
            </nav>
            <Search />
            <CartPreview /> 
        </header>
    )
}

export default BarNav;