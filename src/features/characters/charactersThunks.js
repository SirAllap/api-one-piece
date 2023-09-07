import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async () => {
        return await axios.get('https://api.api-onepiece.com/characters')
            .then((res) => { return res.data })
    }
)