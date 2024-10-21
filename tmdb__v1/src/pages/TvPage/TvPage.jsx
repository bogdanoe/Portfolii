import React, {useEffect, useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import {IMG_URL,API_URL,API_KEY_3} from "../../constants/API.js";
import {sendRequest} from "../../helpers/sendRequest.js";

import Container from "../../layout/Container/Container.jsx";

import ArrowIcon from './icons/leftArrow.svg?react'

import './TvPage.scss'

const TvPage = () => {
	const {id} = useParams(); // хук для того что бы получить динамическую часть роутинга
	const navigate = useNavigate(); // хук который позволяет нам делать редеректи на какую то страницу
    const [data,setData] = useState({}) // делаем стейт для получения данных из запроса определенного фильма

	useEffect(()=> {
	    sendRequest(`${API_URL}/tv/${id}?api_key=${API_KEY_3}`)
	        .then((data)=>{setData(data)});
	}, []);

	const goBack = () => navigate(-1); // делаем редерект по истории перехода по сайту, редерект на предыдущего страницу

    const {
        backdrop_path,
        poster_path,
        name,
        original_name,
        release_date,
        runtime,
        genres = [],
        episode_run_time,
        overview,
        created_by = [],
        seasons = [],
        last_episode_to_air,
        next_episode_to_air
    } = data;

	return (
		<>
			<header className="page-tv-header">
				<div className="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}}/>
				<Container>
					<div className="header-wrapper">
                        <span className="btn-back" onClick={goBack}>
							<ArrowIcon />
                        </span>
						<div className="header-poster">
							<img className="image" src={`${IMG_URL}${poster_path}`} alt={name}/>
						</div>
						<div className="header-content">
							<p className="movie-name">{name}</p>
							<p className="movie-subname"><i>{original_name}</i></p>
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
			<div className="page-movie-content">
				<Container>
					<p className="content-title">Seasons</p>
					{/* { seasons {air_date,episode_count,name,poster_path} } */}
					<div className="cards-seasons">
						{seasons?.map(({air_date,episode_count,name,poster_path}) => (
							<div className="card">
								<div className="card-post"><img src={`${IMG_URL}${poster_path}`} alt={name}/></div>
								<div className="card-content">
									<p className="card-name">{name}</p>
									<p className="card-info">
										<span>{air_date}</span> | <span>{episode_count} episodes</span>
									</p>
								</div>
							</div>
						))}
					</div>
					<p className="content-title">Episodes</p>
					<div className="cards-episodes">
						{last_episode_to_air && (
							<div className="episode-item episodes-last">
								<div className="episode-wrapper">
									<div className="episode-post">
										<img src={`${IMG_URL}${last_episode_to_air?.still_path}`}
										     alt={last_episode_to_air?.name}/>
									</div>
									<div className="episode-content">
										<p className="episode-name">Episodes name: {last_episode_to_air?.name}</p>
										<p className="episode-date">
											<i>Episodes date: {last_episode_to_air?.air_date}</i>
										</p>
										<p className="episode-info">Season: {last_episode_to_air?.season_number} Episode:
											{last_episode_to_air?.episode_number} Runtime: {last_episode_to_air?.runtime}
										</p>
										<p className="episode-overview">{last_episode_to_air?.overview}</p>
									</div>
								</div>
							</div>
						)}
						{next_episode_to_air && (
							<div className="episode-item episodes-next">
								<div className="episode-wrapper">
									<div className="episode-post">
										<img src={`${IMG_URL}${next_episode_to_air?.still_path}`}
										     alt={next_episode_to_air?.name}/>
									</div>
									<div className="episode-content">
										<p className="episode-name">Episodes name: {next_episode_to_air?.name}</p>
										<p className="episode-date"><i>Episodes
											date: {next_episode_to_air?.air_date}</i></p>
										<p className="episode-info">Season: {next_episode_to_air?.season_number} Episode:
											{next_episode_to_air?.episode_number} Runtime: {next_episode_to_air?.runtime}
										</p>
										<p className="episode-overview">{next_episode_to_air?.overview}</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</Container>
			</div>
		</>
	);
};

export default TvPage;