import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Meta from "./components/Meta/Meta.jsx";
import ForecastCards from "./components/ForecastCards/ForecastCards.jsx";

// import {sendRequest} from "../../helpers/sendRequest.js";
// import {API_KEY,API_URL} from "../../configs/API.js";
import {actionFetchWeatherCity} from "../../store/actions.js";
import {useDispatch,useSelector} from 'react-redux'
import {selectorWeather} from '../../store/selectors.js'

const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Forecast = ({city}) => { // добавляем пропс для того что бы можно было делать запросы на разные города но по умолчанию делаем Киев
    // const [current, setCurrent] = useState({})
    // const [forecast, setForecast] = useState([])
    const dispatch = useDispatch()
    const data = useSelector(selectorWeather)


    useEffect(() => {
        dispatch(actionFetchWeatherCity(city))
        // dispatch(actionFetchThunkWeatherCity(city))

        // sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=5`)
        //     .then(({current, forecast}) => {
        //         setCurrent({
        //             cloud: current.cloud,
        //             humidity: current.humidity,
        //             feelslike: current.feelslike_c
        //         })
        //         const updatForecast = forecast.forecastday.map((item) => {
        //             let currentDate = new Date(item.date)
        //             let weekDay = daysArr[currentDate.getDay()]
        //             let day = currentDate.getDate()
        //             let month = monthsArr[currentDate.getMonth()]
        //             console.log(item);
        //             return {
        //                 data:item.date,
        //                 condition: item.day.condition,
        //                 weekDay:weekDay,
        //                 day:day,
        //                 month:month,
        //                 maxTemp: item.day.maxtemp_c
        //             }
        //         })
        //         setForecast(updatForecast)
        //     })

        // sendRequest('/index.json')
        //     .then(({current, forecast}) => {
        //         setCurrent(current)
        //         setForecast(forecast)
        //     })
    }, []);

    return (
        <div className="weather-wrapper">
            <Meta
                cloud={data?.current?.cloud}
                feelslike={data?.current?.feelslike}
                humidity={data?.current?.humidity}
            />
            <ForecastCards forecast={data?.forecast} />
        </div>
    );
};

Forecast.defaultProps = {
    city: "kyiv"
}
Forecast.propTypes = {
    city: PropTypes.string,
}
export default Forecast;