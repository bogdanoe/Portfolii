import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'

const ForecastCard = ({data,className,onFavorite}) => {
    const {
        weekDay,
        day,
        month,
        maxTemp,
        condition,
    } = data;
    const currenDate = new Date()
    const isSelected = currenDate.getDate() === day
    return (
        <div className={cn("forecast__card", className, {"card--selected": isSelected})}>
            <p className="card__data">{weekDay} <br/> {day} {month}</p>
            <div className="card__icon">
                <img src={condition.icon} alt={condition.text}/>
            </div>
            <span onClick={()=>onFavorite(data)} className="card__temp">{maxTemp}</span>
        </div>
    );
};

ForecastCard.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
    onFavorite: PropTypes.func,
}
export default ForecastCard;