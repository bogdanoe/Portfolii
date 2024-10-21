import React from 'react';
import PropTypes from "prop-types";
const ModalContent = ({children}) => {
    return (
        <div className="modal-content">
            {children}
        </div>
    );
};
ModalContent.propTypes = {
    children: PropTypes.any,
}
export default ModalContent;