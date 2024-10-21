import React from 'react';
import PropTypes from "prop-types";
import "./ModalBase.scss";

const ModalWrapper = ({children, onClick, isOpen}) => {
    return (
        <>
            {
                isOpen && (
                    <div className="modal-wrapper" onClick={(e) => {
                        if (e.target.classList.contains("modal-wrapper")) {
                            onClick()
                        }
                    }}>
                        {children}
                    </div>
                )
            }
        </>
    );
};

ModalWrapper.defaultProps = {
    isOpen: false
}

ModalWrapper.propTypes = {
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    children: PropTypes.any,
}

export default ModalWrapper;