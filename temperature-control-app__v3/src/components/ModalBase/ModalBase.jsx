import React from 'react';
import PropTypes from "prop-types";
import ModalWrapper, {ModalBox, ModalContent, ModalHeader, ModalFooter, ModalClose} from "../ModalBase";
import Button from "../Button/Button.jsx";

const ModalBase = ({onClose,isOpen}) => {
    return (
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox>
                <ModalClose onClick={onClose} />
                <ModalHeader>
                    Base Modal
                </ModalHeader>
                <ModalContent>
                    Base Modal Content
                </ModalContent>
                <ModalFooter>
                    <div className="button-wrapper">
                        <Button className="modal-btn">OK</Button>
                        <Button className="modal-btn" onClick={onClose}>Cansel</Button>
                    </div>
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
    );
};

ModalBase.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
}
export default ModalBase;