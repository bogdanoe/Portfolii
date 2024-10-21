import React from 'react';
import PropTypes from "prop-types";

import CloudIcon from './icons/cloud.svg?react'
import HumidityIcon from './icons/humidity.svg?react'
import TempIcon from './icons/temp.svg?react'

import './Meta.scss'

const Meta = (props) => {
    const {
        cloud,
        humidity,
        feelslike
    } = props;

    return (
        <div className="meta">
            <span className="meta__item meta--cloud">
                <span className="meta__icon">
                    <CloudIcon />
                </span>
                {cloud}%
            </span>
            <span className="meta__item meta--humidity">
                <span className="meta__icon">
                    <HumidityIcon />
                </span>
                {humidity}%
            </span>
            <span className="meta__item meta--feelslike">
                <span className="meta__icon">
                    <TempIcon />
                </span>
                {feelslike}
            </span>
        </div>
    );
};

Meta.propTypes = {
    cloud: PropTypes.number,
    humidity: PropTypes.number,
    feelslike: PropTypes.number,
}

export default Meta;