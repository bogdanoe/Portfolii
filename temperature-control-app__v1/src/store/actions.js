import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {sendRequest} from "../helpers/sendRequest.js";
import {API_KEY,API_URL} from "../configs/API.js";

export const actionBedroomIn = createAction("ACTION_BEDROOM_IN")
export const actionBedroomDe = createAction("ACTION_BEDROOM_DE")
export const actionChildrenIn = createAction("ACTION_CHILDREN_IN")
export const actionChildrenDe = createAction("ACTION_CHILDREN_DE")
export const actionWeatherCity = createAction("ACTION_WEATHER_CITY")
export const actionFetchWeatherCity = createAsyncThunk(
    'fetchWeatherCity',
    async (city) => {
        const data = await sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=5`)
        return  data

    }
)