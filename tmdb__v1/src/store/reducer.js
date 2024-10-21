import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import * as actions from './actions.js'
import {sendRequest} from "../helpers/sendRequest.js";
import {API_KEY_3, API_URL} from "../constants/API.js";

export default createReducer(
    {
        cinemaSliderCards: [],
        tvSliderCards: [],
    },
    (builder)=>{
        builder
            .addCase(actions.actionCinemaSliderCards,(state, {payload}) =>{
                state.cinemaSliderCards = [...payload]
            })
            .addCase(actions.actionTvSliderCards,(state, {payload}) =>{
                state.tvSliderCards = [...payload]
            })
            .addCase(actions.fetchCinemaSliderCards.fulfilled, (state,{payload}) =>{
                if (payload) {
                    state.cinemaSliderCards = [...payload]
                }
            })
            .addCase(actions.fetchTvSliderCards.fulfilled, (state,{payload}) =>{
                if (payload) {
                    state.tvSliderCards = [...payload]
                }
            })

    })
