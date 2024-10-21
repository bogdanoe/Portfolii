import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IMG_URL,API_URL,API_KEY_3} from "../../constants/API.js";
import {sendRequest} from "../../helpers/sendRequest.js";

import Container from "../../layout/Container/Container.jsx";

import ArrowIcon from './icons/leftArrow.svg?react'

import './CinemaPage.scss'

const CinemaPage = () => {
	const {id} = useParams(); // хук для того что бы получить динамическую часть роутинга
	const navigate = useNavigate(); // хук который позволяет нам делать редеректи на какую то страницу
	const [data,setData] = useState({}) // делаем стейт для получения данных из запроса определенного фильма

	useEffect(()=> {
		sendRequest(`${API_URL}/movie/${id}?api_key=${API_KEY_3}`)
			.then((data)=>{setData(data)});
	}, []);

	const goBack = () => navigate(-1); // делаем редерект по истории перехода по сайту, редерект на предыдущего страницу

	const {
        backdrop_path,
        poster_path,
        original_title,
        title,
        genres = [],
        runtime,
        overview,
        release_date,
    } = data;

	return (
		<header className="page-movie-header">
			<div className="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}}/>
			<Container>
				<div className="header-wrapper">
                    <span className="btn-back" onClick={goBack}>
                        <ArrowIcon />
					</span>
                    <div className="header-poster">
                        <img className="image" src={`${IMG_URL}${poster_path}`} alt={title}/>
                    </div>
					<div className="header-content">
						<p className="movie-name">{title}</p>
						<p className="movie-subname"><i>{original_title}</i></p>
						<p className="movie-info">
                            <span className="genres">
	                                {genres.map(({name}) => <span>{name},</span>)}
                                </span>
							<span className="runtime">{runtime}</span>
						</p>
						<p className="movie-overview">
							{overview}
						</p>
						<p className="movie-created">
							Release date: {release_date}
						</p>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default CinemaPage;