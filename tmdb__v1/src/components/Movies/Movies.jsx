import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/scrollbar';


import MovieItem from "./components/MovieItem/MovieItem.jsx";
import ModalMovies from "./components/ModalMovies/ModalMovies.jsx";

import {IMG_URL} from "../../constants/API.js";
import {fetchCinemaSliderCards, fetchTvSliderCards} from '../../store/actions.js'
import {selectorTvSliderCards,selectorCinemaSliderCards} from "../../store/selectors.js";

import LeftArrowIcon from './icons/leftArrow.svg?react'

import "./Movies.scss"

const Movies = ({onFavorite,favorites}) => {

    const movieTv = useSelector(selectorTvSliderCards);
    const movieCinema = useSelector(selectorCinemaSliderCards);
    const [currentDate, setCurrentDate] = useState({});
    const [isModal, setIsModal] = useState(false);
    const [step, setStep] = useState(0);
    const handleCurrentDate = (item) => {
        return setCurrentDate(item);
    }
    const handleModal = () => setIsModal(!isModal);

    const rootState = useSelector((state)=>state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCinemaSliderCards());
        dispatch(fetchTvSliderCards())
    }, [])

    // useEffect(()=> {
    //     sendRequest(`${API_URL}/discover/tv?api_key=${API_KEY_3}`)
    //         .then(({results})=>{setMovieTv(results)});
    //
    //     sendRequest(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
    //         .then(({results})=>{setMovieCinema(results)});
    // }, []);

    return (
        <>
            <div className="films__container">
                <div className="films__title">Popular on TV</div>
                <div className="films__slider">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={16}
                        className="films__wrapper"
                        navigation={true}
                        grabCursor={false}
                        draggable={false}
                        preventClicksPropagation={true}
                        preventClicks={true}
                        scrollbar={{draggable: false, hide: true}}
                        slideToClickedSlide={false}
                        pagination={{clickable: true}}
                        modules={[Scrollbar]}
                    >
                        {movieTv.map((item)=>(
                            <SwiperSlide key={item.id} className="film__item">
                                <MovieItem
                                    title={item.name}
                                    original_title={item.original_name}
                                    poster_path={item.poster_path}
                                    overview={item.overview}
                                    linkPath={`/tv/${item.id}`}
                                    onClick={() => {
                                        handleCurrentDate(item)
                                        handleModal();
                                        }
                                    }
                                    isFavorite={favorites?.some((itemFavorit) => itemFavorit.id === item.id)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="film__link">
                        <Link to="/tv/all" className="link">All TV</Link>
                        <LeftArrowIcon />
                    </p>
                </div>
                <div className="films__title">Popular on cinemas</div>
                <div className="films__slider">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={16}
                        className="films__wrapper"
                        navigation={true}
                        grabCursor={false}
                        draggable={false}
                        preventClicksPropagation={true}
                        preventClicks={true}
                        scrollbar={{draggable: false, hide: true}}
                        slideToClickedSlide={false}
                        pagination={{clickable: true}}
                        modules={[Scrollbar]}
                    >
                        {
                            movieCinema.map((item) => (
                                <SwiperSlide key={item.id} className="film__item">
                                    <MovieItem
                                        title={item.title}
                                        original_title={item.original_title}
                                        poster_path={item.poster_path}
                                        overview={item.overview}
                                        linkPath={`/cinema/${item.id}`}
                                        isFavorite={favorites?.some((itemFavorit) => itemFavorit.id === item.id)}
                                        onClick={() => {
                                            handleCurrentDate(item)
                                            handleModal();
                                        }}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <p className="film__link">
                        <Link to="/cinema/all" className="link">All Cinemas</Link>
                        <LeftArrowIcon />
                    </p>
                </div>
            </div>
            <ModalMovies
                title={currentDate.title ? currentDate.title : currentDate.name}
                subTitle={currentDate.original_name ? currentDate.original_name : currentDate.original_title}
                desc={currentDate.overview}
                img={`${IMG_URL}${currentDate.backdrop_path}`}
                isOpen={isModal}
                onClose={handleModal}
                isFavorite={favorites?.some((itemFavorit) => itemFavorit.id === currentDate.id)}
                onClick={() => {
                    onFavorite(currentDate)
                    handleModal()
                }}
            />
        </>
    );
};

Movies.propTypes = {
    onFavorite: PropTypes.func,
}

export default Movies;