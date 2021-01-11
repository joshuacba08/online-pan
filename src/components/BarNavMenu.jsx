import React, { useState } from 'react';
import './styles/BarNavMenu.css';
import { NavLink } from 'react-router-dom';

const BarNavMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const changeState = () => {
        setShowMenu(!showMenu);
    }
    const displaySubmenu = () => {
        setShowSubMenu(!showSubMenu);
    }
    return (
        <>
            {showMenu===true&&
                <nav>
                    <ul className="main-nav">
                        <li>
                            <NavLink exact to='/' activeClassName="selected" className="no-selected" onClick={changeState}>INICIO</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/shop'
                                activeClassName="selected"
                                className="no-selected"
                                onClick={ changeState }>PRODUCTOS
                            </NavLink>
                            <span className="down-arrow icon"
                            onClick={displaySubmenu}></span>
                            {showSubMenu&&
                            <div className="dropdown-menu">
                                <ul>
                                    <li>
                                        <NavLink to='/shop/panaderia' activeClassName="selected"
                                        className="no-selected"
                                        onClick={ changeState }>
                                            Panadería
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/shop/pasteleria' activeClassName="selected"
                                        className="no-selected"
                                        onClick={changeState}>Pastelería</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/shop/navidad'
                                        activeClassName="selected"
                                        className="no-selected"
                                        onClick={changeState}>Navideños</NavLink>
                                    </li>
                                </ul>
                            </div>
                            }
                        </li>
                        <li>
                            <NavLink to='/Blog'
                            activeClassName="selected" 
                            className="no-selected"
                            onClick={changeState}>BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact' 
                            activeClassName="selected" 
                            className="no-selected"
                            onClick={changeState}>CONTACTO</NavLink>
                        </li>
                    </ul>
                </nav>
            }
            {showMenu === false &&
                <div className="icon-menu-container">
                    <i className="icon--menu icon" onClick={changeState}></i>
                </div>
            }
        </>

    )
}

export default BarNavMenu;
