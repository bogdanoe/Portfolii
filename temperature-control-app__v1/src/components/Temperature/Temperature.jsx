import React from 'react';
import PropTypes from "prop-types";
import HotIcon from './icons/hot.svg?react'
import ColdIcon from './icons/cold.svg?react'

import './Temperature.scss';
const Temperature = ({temperature}) => {
    const isCold = temperature <= 10;
    const isHot = temperature > 20;
    const isTern = temperature > 11;

    return (
        <div className="temperature-wrapper">
            <div className="temperature-display">
                <div className="temperature-icon">
                    {isHot && <HotIcon/>} {/*// true ? <Component1/> : <Component2/>  === true && <Component/> */}
                    {isCold && <ColdIcon/>}

                    {/*{isTern ? (
                            <HotIcon/>
                        ) : (
                            <ColdIcon/>
                        )
                    }*/}
                </div>
                {temperature}
            </div>
        </div>
    );
};

Temperature.propTypes = {
    temperature: PropTypes.number
}
export default Temperature;