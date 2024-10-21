import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './slices.js'



export default configureStore({
    reducer: rootReducer,
})