import React from 'react';
import PropTypes from "prop-types";
import ModalWrapper, {ModalBox, ModalContent, ModalHeader, ModalFooter, ModalClose} from "../ModalBase";
import Button from "../Button/Button.jsx";

const ModalBase = ({onClose, isOpen, onClick, img, title, description}) => {
    return (
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox>
                <ModalClose onClick={onClose} />
                <ModalHeader>
                    <img src={img} alt=""/>
                </ModalHeader>
                <ModalContent>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </ModalContent>
                <ModalFooter>
                    <div className="button-wrapper">
                        <Button className="modal-btn" onClick={onClick}>Add to Favorite</Button>
                    </div>
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
    );
};

ModalBase.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
export default ModalBase;