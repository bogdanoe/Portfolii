import React from 'react';
import {useParams} from "react-router-dom";
import WidgetWrapper from '../../components/WidgetWrapper/WidgetWrapper.jsx'
import Forecast from '../../components/Forecast'

import './PageWeatherCity.scss'


const PageWeatherCity = () => {
	const {city} = useParams() // хук который позволяет получить динамическую часть ссылки нашего роутинга
	return (
		<WidgetWrapper pageName={`Weather ${city}`}>
			<div className="weather__title">{city}</div>
			<Forecast city={city} days={5}/>
		</WidgetWrapper>
	);
};

export default PageWeatherCity;
