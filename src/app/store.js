import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/characters/charactersSlice'

const store = configureStore({
    reducer: {
        charactersFetch: characterReducer
    }
})

export default store