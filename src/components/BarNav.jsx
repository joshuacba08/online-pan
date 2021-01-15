import  './styles/BarNav.css';
import confLogo from '../assets/img/Melon.png';
import CartPreview from './CartPreview';
import Search from './Search';
import { Link } from 'react-router-dom';
import BarNavMenu from './BarNavMenu';

 
function BarNav () {
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={confLogo} alt="Logo de la Marca"/>
                </Link>
            </div>
            
            <div className="nav-elements-container">
                <BarNavMenu />
                <Search />
                 
                    <CartPreview />

            </div> 
        </header>
    )
}

export default BarNav;