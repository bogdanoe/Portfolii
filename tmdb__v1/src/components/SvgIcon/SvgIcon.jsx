import React from 'react';
import PropTypes from "prop-types";
import './SvgIcon.scss'
const SvgIcon = ({id}) => {
    return (
        <span className={`svg-icon svg-${id}`}>
             <svg>
                <use xlinkHref={`public/sprite.svg#${id}`}></use>
             </svg>
        </span>
    );
};
SvgIcon.propTypes = {
    id: PropTypes.string,
}
export default SvgIcon;
