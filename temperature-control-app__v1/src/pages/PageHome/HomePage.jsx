import React, {useState} from 'react';
import PropTypes from "prop-types";
import Temperature from "../../components/Temperature/Temperature.jsx";
import Controls from "../../components/Controls/Controls.jsx";
import ModalBase from "../../components/ModalBase/ModalBase.jsx";
import ModalTemperature from "../../components/ModalTemperature/ModalTemperature.jsx";
import ModalTemperatureESPEREMENT from "../../components/ModalTemperatureESPEREMENT/ModalTemperature.jsx";
import Forecast from "../../components/Forecast";

const HomePage = ({temperature, onHot, onCold}) => {
    const [isModal, setIsModal] = useState(false);
    const [isModalTemperature, setIsModalTemperature] = useState(false);
    const handleModal = () => {
        setIsModal((prevState) => !prevState)
    }
    const handleModalTemperature = () => {
        setIsModalTemperature((prevState) => !prevState)
    }

    return (
        <>
            <Controls
               onHot={onHot}
               onCold={onCold}
               onModal={handleModal}
               onModalTemperature={handleModalTemperature}
            />
            <Temperature temperature={temperature}/>
            <Forecast />
            <ModalBase
                isOpen={isModal}
                onClose={handleModal}
            />
            <ModalTemperature
                isOpen={isModalTemperature}
                onClick={handleModalTemperature}
                temperature={temperature}
            >
                <div className="button-wrapper">
                    <button className="btn" type="button">OK</button>
                    <button className="btn" onClick={handleModalTemperature} type="button">Cansel</button>
                </div>
            </ModalTemperature>
            {/*{isModalTemperature && (*/}
            {/*    <ModalTemperatureESPEREMENT*/}
            {/*        onClick={handleModalTemperature}*/}
            {/*        temperature={temperature}*/}
            {/*        text1="fddsffdsfds"*/}
            {/*    >*/}
            {/*        <div className="button-wrapper">*/}
            {/*            <button className="btn" type="button">OK</button>*/}
            {/*            <button className="btn" onClick={handleModalTemperature} type="button">Cansel</button>*/}
            {/*        </div>*/}
            {/*    </ModalTemperature>*/}
            {/*)}*/}
            {/*{isModalTemperature && (*/}
            {/*    <ModalTemperatureESPEREMENT*/}
            {/*        onClick={handleModalTemperature}*/}
            {/*        temperature={temperature}*/}
            {/*        text1="test"*/}
            {/*        text2="test 6434535"*/}
            {/*    >*/}
            {/*        <div className="button-wrapper">*/}
            {/*            <button className="btn" type="button">OK</button>*/}
            {/*            <button className="btn" onClick={handleModalTemperature} type="button">Cansel</button>*/}
            {/*        </div>*/}
            {/*    </ModalTemperature>*/}
            {/*)}*/}
        </>
    );
};
HomePage.propTypes = {
	temperature: PropTypes.number,
	onHot: PropTypes.func,
	onCold: PropTypes.func,
}
export default HomePage;