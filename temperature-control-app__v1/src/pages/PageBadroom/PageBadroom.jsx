import React, {useState} from 'react';
import WidgetWrapper from '../../components/WidgetWrapper/WidgetWrapper.jsx';
import Temperature from '../../components/Temperature/Temperature.jsx';
import Controllers from '../../components/Controls/Controls.jsx';
import Weather from '../../components/Forecast/';
import Modal from '../../components/ModalTemperature/ModalTemperature.jsx';
import {useSelector,useDispatch} from "react-redux"
import {selectorTemperatureBedroom} from '../../store/selectors.js'
import {actionBedroomDe,actionBedroomIn} from '../../store/actions.js'


const PageBadroom = () => {
	// вся логика которая была в странице HomePage я перенес в эту отдельную комнату и получилось что стейт по модалке и температуре стал локальным для этой страницы
	const [isOpen, setIsOpen] = useState(false)
	// const [temperature, setTemperature] = useState(20)
	const temperature = useSelector(selectorTemperatureBedroom)
	const dispatch = useDispatch()
	// const dataState = useSelector((state) => state)
	// console.log('dataState',dataState);
	const handleModal = () => setIsOpen(!isOpen)
	const handleHot = () => {
		dispatch(actionBedroomIn())
		// setTemperature((tem) => {
		// 	if (tem < 29) {
		// 		return tem + 1
		// 	}
		// 	return tem
		// })
	}
	const handleCold = () => {
		dispatch(actionBedroomDe())
		// setTemperature((tem) => {
		// 	if (tem > 0) {
		// 		return tem - 1
		// 	}
		// 	return tem
		// })
	}

	return (
		<>
			<WidgetWrapper
				temperature={temperature}
				pageName={"Badroom"}
			>
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

export default PageBadroom;
