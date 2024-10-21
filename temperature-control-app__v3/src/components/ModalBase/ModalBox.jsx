import React from 'react';
import PropTypes from "prop-types";
const ModalBox = ({children}) => {
    return (
        <div className="modal">
            <div className="modal-box">
                {children}
            </div>
        </div>
    );
};
ModalBox.propTypes = {
    children: PropTypes.any,
}
export default ModalBox;