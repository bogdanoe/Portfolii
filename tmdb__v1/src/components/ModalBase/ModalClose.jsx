import React from 'react';
import PropTypes from "prop-types";
import Close from './icons/close.svg?react'

const ModalClose = ({onClick}) => {
    return (
        <button type="button" onClick={onClick} className="modal-close">
            <Close/>
        </button>
    );
};

ModalClose.propTypes = {
    onClick: PropTypes.func,
}

export default ModalClose;