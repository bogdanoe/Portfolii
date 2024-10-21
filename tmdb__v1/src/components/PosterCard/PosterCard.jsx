import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'
import {IMG_URL} from "../../constants/API.js";
import Button from "../Button/Button.jsx";
import FavoriteIcon from './icons/favorite.svg?react'
import './PosterCard.scss'
const PosterCard = (props) => {
    const {poster,onClick,isFavorite} = props
    // console.log(isFavorite);
    const linkPath = poster.original_title ? `/cinema/${poster.id}` : `/tv/${poster.id}`
    return (
        <div className="card-poster">
            <div className={cn("card-favorite",{active: isFavorite})}>
                <FavoriteIcon />
            </div>
            <img
                src={`${IMG_URL}${poster.poster_path}`}
                height={'376px'}
                alt={poster.name ? poster.name : poster.title}
            />
            <div className="poster-back">
                <h4 className="card-title">{poster.name}</h4>
                <p className="card-subtitle">{poster.original_name}</p>
                <p className="card-desc">{poster.overview}</p>
                <div className="card-buttons">
                    <Button to={linkPath}>Show more</Button>
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
    );
};

PosterCard.propTypes = {
    poster: PropTypes.array,
    onClick: PropTypes.func,
    isFavorite: PropTypes.bool,
}

export default PosterCard;
