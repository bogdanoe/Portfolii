import {createAction, createAsyncThunk} from "@reduxjs/toolkit"
import {sendRequest} from "../helpers/sendRequest.js";
import {API_KEY_3, API_URL} from "../constants/API.js";


export const actionCinemaSliderCards = createAction("ACTION_CINEMA_SLIDER_CARDS")
export const actionTvSliderCards = createAction("ACTION_TV_SLIDER_CARDS")
// export const ACTION_CINEMA_SLIDER_CARDS = "ACTION_CINEMA_SLIDER_CARDS"

export const fetchCinemaSliderCards = createAsyncThunk(
	'cinema/fetchCiname',
	async () => {
		const data = await sendRequest(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
		return data.results;
	}
)

export const fetchTvSliderCards = createAsyncThunk(
	'tv/fetchTv',
	async () => {
		const data = await sendRequest(`${API_URL}/discover/tv?api_key=${API_KEY_3}`)
		return data.results;
	}
)