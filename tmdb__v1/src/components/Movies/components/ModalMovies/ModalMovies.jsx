import React from "react";
import PropTypes from "prop-types";
import {ModalBox, ModalClose, ModalContent, ModalFooter, ModalHeader} from "../../../ModalBase/index.js";
import Button from "../../../Button/Button.jsx";
import ModalWrapper from "../../../ModalBase/index.js";

import './ModalMovies.scss'

const ModalMovies = ({title, img, onClick, onClose, isOpen, desc, subTitle, isFavorite}) => {
    return (
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox className="modal-movies">
                <ModalClose onClick={onClose} />
                <ModalHeader>
                    <div className="image">
                        <img src={img} alt={title}/>
                    </div>
                </ModalHeader>
                <ModalContent>
                    <h4 className="modal-title">{title}</h4>
                    <p className="modal-subTitle"><i>{subTitle}</i></p>
                    <p className="modal-desc">{desc}</p>
                </ModalContent>
                <ModalFooter>
                    {/* Добавляем новую кнопку для подтверждения удаления из избраного */}
                    <div className="button-wrapper">
                        {
                            isFavorite ? (
                                <Button className="modal-btn" onClick={onClick}>unFavorite</Button>
                            ) : (
                                <Button className="modal-btn" onClick={onClick}>Add to Favorite</Button>
                            )
                        }
                    </div>
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
    )
}

ModalMovies.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    desc: PropTypes.string,
    subTitle: PropTypes.string,
}

export default ModalMovies;