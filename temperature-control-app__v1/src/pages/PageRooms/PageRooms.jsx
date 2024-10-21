import React from 'react';
import {Link} from "react-router-dom";
import WidgetWrapper from '../../components/WidgetWrapper/WidgetWrapper.jsx'

import Room from './icons/room.svg?react'
import BabyRoom from './icons/baby_bed_room.svg?react'

import './PageRooms.scss'

const PageRooms = () => {
	return (
		<WidgetWrapper pageName={"Rooms"}>
			<div className="page-dashboard">
				<div className="g-container">
					<div className="dashboard-wrapper">
						<div className="card-box">
							<Link to="room" className="icon">
								<Room/>
							</Link>
						</div>
						<div className="card-box">
							<Link to="baby-room" className="icon">
								<BabyRoom/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</WidgetWrapper>
	);
};

export default PageRooms;
