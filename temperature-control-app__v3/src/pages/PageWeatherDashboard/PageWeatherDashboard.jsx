import React from 'react';
import {Link} from "react-router-dom";
import WidgetWrapper from '../../components/WidgetWrapper/WidgetWrapper.jsx'
import Container from '../../layout/Container/Container.jsx'
import './PageWeatherDashboard.scss'

const PageWeatherDashboard = () => {
	const citys = [
		{city: 'Poltava', name: 'Полтава'},
		{city: 'Kharkiv', name: 'Харків'},
		{city: 'Luhansk', name: 'Луганськ'},
		{city: 'Rivne', name: 'Рівне'},
		{city: 'Kherson', name: 'Херсон'},
		{city: 'Kamelnitskiy', name: 'Хмельницький'},
		{city: 'Zhytomyr', name: 'Житомир'},
		{city: 'Lviv', name: 'Львів'},
		{city: 'Sumy', name: 'Суми'},
		{city: 'Cherkasy', name: 'Черкаси'},
		{city: 'Zaporozhe', name: 'Запоріжжя'},
		{city: 'Ternopil', name: 'Тернопіль'},
		{city: 'Chernihiv', name: 'Чернігів'},
		{city: 'Odesa', name: 'Одеса'},
		{city: 'Uzhhorod', name: 'Ужгород'},
		{city: 'Chernivtsi', name: 'Чернівці'},
		{city: 'Kyiv', name: 'Київ'},
	]
	return (
		<WidgetWrapper pageName="Weathers">
			<div className="weather-dashboard">
				<Container>
					<div className="weather-list">
						{
							citys.map((city) => (
								<Link to={`${city.city}`} className="list-item">{city.name}</Link>
							))
						}
					</div>
				</Container>
			</div>
		</WidgetWrapper>
	);
};

export default PageWeatherDashboard;
