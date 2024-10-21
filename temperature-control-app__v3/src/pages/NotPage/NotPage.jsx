import React from 'react';
import {Link} from "react-router-dom";
import './NotPage.scss'
const NotPage = () => {
	return (
		<div className="not-page">
			<p className="page-title">This page has been abducted.</p>
			<p className="page-desc">Let’s head back home and try that again. The truth is out there…</p>
			<p>
				<Link to="/">Home</Link>
			</p>
		</div>
	);
};

export default NotPage;
