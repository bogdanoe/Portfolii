import cn from 'classnames'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

import './Button.scss'

const Button = (props) => {
    const {
        onClick,
        type,
        className,
        href,
        children,
        to,
        isOutline,
        ...restProps

    } = props;
    let Element = href ? "a" : "button";
    if (to) {
        Element = Link
    }
    return (
        <Element
            onClick={onClick}
            className={cn('button', className, {'outline': isOutline})}
            type={type}
            to={to}
            href={!type && href}
            {...restProps}>
            {children}
        </Element>
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

export default Button;