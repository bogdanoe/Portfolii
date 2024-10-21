import React from 'react';
import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";
import RightArrow from './img/right-arrow.svg?react'

import './Header.scss'

const Header = ({pageName}) => {
	const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
	const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const currentDate = new Date();
	const days = daysArr[currentDate.getDay()]; //[0-6]
	const day = currentDate.getDate(); //[1-31]
	const months = monthsArr[currentDate.getMonth()];//[0-11]

	const navigate = useNavigate() // хук кторый умеет делать редерект на любую страницу сайта, или переход по истории переходов на сайте
	const {pathname} = useLocation() // хук который сомтрит на какой странице сейчас нахожуть, хук возращает обьект и мы можем проверить на какой странице мы находимся
	const isIndexPage = pathname === '/' // делаем проверку мы сейчас находимся на индекс страница или нет для того что бы ниже сделать условие что бы показывать название страницы везде кроме индекс страници

	const handleGoBack = () => navigate(-1); // делаем функцию переход назад по истории браузера

	return (
		<div className="header-wrapper">
			{!isIndexPage && (
				<div className="page-name">
					<span className="btn-back" onClick={handleGoBack}><RightArrow/></span>
					{pageName}
				</div>
			)}

			<div className="header">
				<div className="current-date">
					<p className="day">{days}</p>
					<p className="data">{day} {months}</p>
				</div>
			</div>
		</div>
	);
};
Header.propTypes = {
	pageName: PropTypes.string,
}

export default Header;