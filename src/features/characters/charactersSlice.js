import { createSlice } from '@reduxjs/toolkit'
import { fetchCharacters } from './charactersThunks'

const initialState = {
    initialFetch: [],
    status: 'idle',
    error: null
}

export const characterSlice = createSlice({
    name: 'fetchingCharacters',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCharacters.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.initialFetch = action.payload
            })
    }
})

export default characterSlice.reducer

export const initialFetchOfCharacters = (state) => state.fetchingCharacters.initialFetch

export const fetchStatus = (state) => state.fetchingCharacters.status