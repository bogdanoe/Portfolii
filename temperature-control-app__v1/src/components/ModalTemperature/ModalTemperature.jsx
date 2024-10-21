import React from 'react';
import PropTypes from "prop-types";
import ModalWrapper, {ModalBox, ModalContent, ModalHeader, ModalFooter} from "../ModalBase";

const ModalTemperature = (props) => {
    const {children, onClick, temperature, isOpen} = props
    return (
        <ModalWrapper onClick={onClick} isOpen={isOpen}>
            <ModalBox>
                <ModalHeader>
                    Temperature
                </ModalHeader>
                <ModalContent>
                    <div className="input">
                        <input className="input-box" type="text" value={temperature}/>
                    </div>
                </ModalContent>
                <ModalFooter>
                    {children}
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
    );
};

ModalTemperature.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    temperature: PropTypes.number,
    isOpen: PropTypes.bool,
}
export default ModalTemperature;