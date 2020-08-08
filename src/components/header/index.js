import React from 'react';
import logo from '../../images/logo.png';
import './index.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={logo} />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Sign In</span>
                    </div>
                </Link>

                <Link to="/register" className="header__link">
                    <div className="header__option">
                        <span>Register</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Contact Us</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}


export default Header;