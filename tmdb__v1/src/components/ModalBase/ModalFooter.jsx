import React from 'react';
import PropTypes from "prop-types";

const ModalFooter = ({children}) => {
    return (
        <footer className="modal-footer">
            {children}
        </footer>
    );
};

ModalFooter.propTypes = {
    children: PropTypes.any,
}

export default ModalFooter;