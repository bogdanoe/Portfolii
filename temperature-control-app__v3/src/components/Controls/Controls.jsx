import React from 'react';
import PropTypes from "prop-types";
import Button from "../Button";
import './Controls.scss'

const Controls = (props) => {
    const {onHot, onCold, onModal, onModalTemperature} = props

    return (
        <div className="widget-controllers">
            <div className="button-container">
                <Button className="_cold" type="reset" onClick={onCold}>Cold</Button>
                <Button className="_hot" onClick={onHot}>Hot</Button>
                <Button onClick={onModal}>Modal Base</Button>
                {/*<Button onClick={onModalTemperature}>Modal Temperature</Button>*/}
            </div>
        </div>
    );
};

Controls.propTypes = {
    onHot: PropTypes.func,
    onCold: PropTypes.func,
    onModal: PropTypes.func,
    onModalTemperature: PropTypes.func,
}

export default Controls;