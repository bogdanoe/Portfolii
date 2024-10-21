import React from 'react';
import PropTypes from "prop-types";
import ModalWrapper from "../ModalBase/ModalWrapper.jsx";
import ModalBox from "../ModalBase/ModalBox.jsx";
import ModalHeader from "../ModalBase/ModalHeader.jsx";
import ModalContent from "../ModalBase/ModalContent.jsx";
import ModalFooter from "../ModalBase/ModalFooter.jsx";

const ModalTemperature = (props) => {
    const {
        children,
        onClick,
        temperature,
        title,
        text1,
        text2} = props
    return (
        <ModalWrapper onClick={onClick}>
            <ModalBox>
                <ModalHeader>
                    {title}
                </ModalHeader>
                <ModalContent>
                    {text1 && <p>{text1}</p>}
                    {text2 && <p>{text2}</p>}
                    {text1 ? (
                        <p>{text1}</p>
                    ): (
                        <div>text1</div>
                    )}
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
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
}
export default ModalTemperature;