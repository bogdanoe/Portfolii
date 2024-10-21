import {createReducer, isAsyncThunkAction, isFulfilled} from '@reduxjs/toolkit'
import * as actions from './actions.js'

export default createReducer(
    {
        temperatureChildren: 23,
        temperatureBedroom: 20,
        weather:{},
        city: "kyiv",
    },
    (builder)=>{
        builder
            .addCase(actions.actionBedroomIn, (state,action)=>{
                if (state.temperatureBedroom < 29) {
                    state.temperatureBedroom += 1
                }
            })
            .addCase(actions.actionBedroomDe, (state,action)=>{
                if (state.temperatureBedroom > 0) {
                    state.temperatureBedroom -= 1
                }
            })
            .addCase(actions.actionChildrenIn, (state,action)=>{
                if (state.temperatureChildren < 25) {
                    state.temperatureChildren += 1
                }
            })
            .addCase(actions.actionChildrenDe, (state,action)=>{
                if (state.temperatureChildren > 16) {
                    state.temperatureChildren -= 1
                }
            })
            .addMatcher(actions.actionFetchWeatherCity.fulfilled, (state, {payload}) => {
                const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
                const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                if(payload){
                    const {current, forecast} = payload
                    const updateForecast = forecast.forecastday.map((item) => {
                        let currentDate = new Date(item.date)
                        let weekDay = daysArr[currentDate.getDay()]
                        let day = currentDate.getDate()
                        let month = monthsArr[currentDate.getMonth()]
                        return {
                            data:item.date,
                            condition: item.day.condition,
                            weekDay:weekDay,
                            day:day,
                            month:month,
                            maxTemp: item.day.maxtemp_c
                        }
                    })
                    state.weather = {
                        current: {
                            cloud: current.cloud,
                            humidity: current.humidity,
                            feelslike: current.feelslike_c,
                        },
                        forecast: updateForecast
                    };
                }
            })
    }
)