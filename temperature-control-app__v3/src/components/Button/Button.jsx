import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames'

import './Button.scss'
const Button = (props) => {
    const {
        className,
        type,
        onClick,
        children,
        ...restProps
    } = props

    return (
        <button
            className={cn("button", className)}
            type={type}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: "button"
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    restProps: PropTypes.object,
}

export default Button