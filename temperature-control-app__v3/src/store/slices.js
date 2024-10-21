import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {sendRequest} from "../helpers/sendRequest.js";
import {API_KEY, API_URL} from "../configs/API.js";

const initialState = {
	temperatureChildren: 23,
	temperatureBedroom: 20,
	weather: {},
	city: "kyiv",
}

export const actionFetchWeatherCity = createAsyncThunk(
	'fetchWeatherCity',
	async (city) => {
		const data = await sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=5`)
		return  data
	}
)

export const temperatureSlice = createSlice({
	name: 'temperature',
	initialState,
	reducers: {
		actionBedroomIn: (state, action) => {
			if (state.temperatureBedroom < 29) {
				state.temperatureBedroom += 1
			}
		},
		actionBedroomDe: (state, action) => {
			if (state.temperatureBedroom > 0) {
				state.temperatureBedroom -= 1
			}
		},
		actionChildrenIn: (state, action) => {
			if (state.temperatureChildren < 25) {
				state.temperatureChildren += 1
			}
		},
		actionChildrenDe: (state, action) => {
			if (state.temperatureChildren > 16) {
				state.temperatureChildren -= 1
			}
		},
		actionCity: (state, {payload}) => {
			state.city = payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(actionFetchWeatherCity.fulfilled, (state, {payload}) => {
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
})

export const {actionBedroomIn,	actionBedroomDe, actionChildrenIn, actionChildrenDe, actionCity} = temperatureSlice.actions

export default temperatureSlice.reducer