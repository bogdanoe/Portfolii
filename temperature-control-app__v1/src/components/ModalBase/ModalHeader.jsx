import React from 'react';
import PropTypes from "prop-types";
const ModalHeader = ({children}) => {
    return (
        <header className="modal-header">
            {children}
        </header>
    );
};
ModalHeader.propTypes = {
    children: PropTypes.any,
}
export default ModalHeader;