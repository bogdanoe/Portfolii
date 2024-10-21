import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import Button from "../../../Button/Button.jsx";
import {IMG_URL} from "../../../../constants/API.js";
import {Link} from "react-router-dom";
import FavoriteIcon from "./icons/favorite.svg?react";
import './MovieItem.scss'

const MovieItem = ({poster_path, title, original_title, overview, onClick, linkPath, isFavorite}) => {

    return (
        <div className="film-poster">
            <div className={cn("card-favorite", {active: isFavorite})}>
                <FavoriteIcon/>
            </div>
            <img src={`${IMG_URL}${poster_path}`} height='376px' alt={title}/>
            <div className='film-poster-back'>
                <h3 className="film-poster__title">{title}</h3>
                <p className="film-poster__subtitle">
                    <i>{original_title}</i>
                </p>
                <p className="film-poster__desc">{overview}</p>
                <div className="button__wrapper">
                    <Link className="button" to={linkPath}>Show more</Link>
                    {isFavorite ? (
                        <Button onClick={onClick} type={'button'} isOutline>
                            unFavorite
                        </Button>
                    ) : (
                        <Button onClick={onClick} type={'button'} isOutline>
                            Favorite
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

MovieItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    onClick: PropTypes.func,
}

export default MovieItem;