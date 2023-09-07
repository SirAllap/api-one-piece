import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialFetch: [],
    status: 'idle',
    error: null
}

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default characterSlice.reducer