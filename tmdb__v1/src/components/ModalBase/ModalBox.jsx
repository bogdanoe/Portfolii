import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

const ModalBox = ({children, className}) => {
    return (
        <div className={cn("modal", className)}>
            <div className="modal-box">
                {children}
            </div>
        </div>
    );
};

ModalBox.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
}

export default ModalBox;