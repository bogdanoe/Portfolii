import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'
import Header from "../Header/Header.jsx";
import SideBar from ".././SideBar/SideBar.jsx";

import './WidgetWrapper.scss'

const WidgetWrapper = ({children, temperature, pageName}) => {

// .widget-container.neutral .widget-container.cold .widget-container.hot
    const isHot= temperature > 20;
    const isCold= temperature <= 10;
    const isNeutral= temperature > 10 && temperature <= 20;

    return (
        <div className={cn(
            "widget-container",
            {hot:isHot},
            {cold:isCold},
            {neutral:isNeutral})
        }>
            <Header pageName={pageName}/>
            <SideBar/>
            {children}
        </div>
    );
};

WidgetWrapper.defaultProps = {
    temperature: 20
}

WidgetWrapper.propTypes = {
    children: PropTypes.array,
    temperature: PropTypes.number,
    pageName: PropTypes.string,
}

export default WidgetWrapper;