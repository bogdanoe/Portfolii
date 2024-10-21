import React from 'react';
import {Link} from "react-router-dom";

import Logo from './images/logo.svg?react'
import Home from './images/home.svg?react'
import Weather from './images/weather.svg?react'

import './SideBar.scss'

const SideBar = () => {
	return (
		<div className="g-sidebar">
			<Link to="/" className="sidebar-logo">
				<Logo/>
			</Link>
			<ul className="sidebar-list">
				<li className="list-item">
					<Link to="/home" className="list-link active">
						<Home/>
					</Link>
				</li>
				<li className="list-item">
					<Link to="/weather" className="list-link active">
						<Weather/>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
