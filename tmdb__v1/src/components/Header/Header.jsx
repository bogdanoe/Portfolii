import React from "react";
import PropTypes from "prop-types";

import IconLogo from './icons/logo.svg?react'
import IconFavorite from './icons/favorite.svg?react'

import './Header.scss'
import {Link} from "react-router-dom";

const Header = ({counterFavorite}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to="/" className="logo">
                            <IconLogo/>
                        </Link>
                    </div>
                    <div className="header__actions">
                        <div className="header__favorites-list">
                            <Link to={"/favorite"} >
                                Favorites
                            </Link>

                            <span className="icon-favorite">
                                <span className="count">{counterFavorite}</span>
                                <IconFavorite/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    counterFavorite: PropTypes.number,
}

export default Header;