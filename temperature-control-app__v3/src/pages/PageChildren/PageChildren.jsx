import React, {useState} from 'react';
import WidgetWrapper from '../../components/WidgetWrapper/WidgetWrapper.jsx';
import Temperature from '../../components/Temperature/Temperature.jsx';
import Controllers from '../../components/Controls/Controls.jsx';
import Weather from '../../components/Forecast/';
import Modal from '../../components/ModalTemperature/ModalTemperature.jsx';
import {useDispatch, useSelector} from "react-redux";
import {selectorTemperatureChildren} from "../../store/selectors.js";
import {actionChildrenIn,actionChildrenDe} from '../../store/slices.js'

const PageChildren = () => {
	// вся логика которая была в странице HomePage я перенес в эту отдельную комнату и получилось что стейт по модалке и температуре стал локальным для этой страницы
	const [isOpen, setIsOpen] = useState(false)
	// const [temperature, setTemperature] = useState(23)
	const temperature = useSelector(selectorTemperatureChildren)
	const dispatch = useDispatch()

	const handleModal = () => setIsOpen(!isOpen)
	const handleHot = () => {
		dispatch(actionChildrenIn())
		// setTemperature((tem) => {
		// 	if (tem < 25) {
		// 		return tem + 1
		// 	}
		// 	return tem
		// })
	}
	const handleCold = () => {
		dispatch(actionChildrenDe())
		// setTemperature((tem) => {
		// 	if (tem > 16) {
		// 		return tem - 1
		// 	}
		// 	return tem
		// })
	}

	return (
		<>
			<WidgetWrapper temperature={temperature} pageName={"Children Room"}>
				<Temperature temperature={temperature}/>
				<Controllers
					onHot={handleHot}
					onCold={handleCold}
					onModal={handleModal}
				/>
				<Weather/>
			</WidgetWrapper>
			<Modal temperature={temperature} isOpen={isOpen} onClick={handleModal}/>
		</>
	);
};

export default PageChildren;
