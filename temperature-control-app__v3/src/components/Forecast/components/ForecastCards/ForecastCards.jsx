import React from 'react';
import PropTypes from "prop-types";
import ForecastCard from "./ForecastCard.jsx";

import './ForecastCards.scss'
const ForecastCards = ({forecast}) => {
    return (
        <div className="forecast">
            {forecast?.map((card, index) => <ForecastCard key={index} data={card} />)}
        </div>
    );
};

ForecastCards.propTypes = {
    forecast: PropTypes.array,
}
export default ForecastCards;