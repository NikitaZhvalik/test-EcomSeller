import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	films: [],
    isLoading: false,
    error: null
}

export const getFilms = createAsyncThunk(
    'films/getFilms',
    async ({query}, {rejectWithValue, dispatch}) => {
        try {
            dispatch(setLoading(true))
            const server = `http://www.omdbapi.com/?s=${query ? query : ""}&type=movie&apikey=41a755ae&r=json`
            const res = await axios.get(server)
            dispatch(setFilms(res?.data))
            dispatch(setLoading(false))
        } catch (error) {
            alert(error.response.data.error.message)
            return rejectWithValue(error.response.data)
        }
    }
)

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: {
        [getFilms.fulfilled]: () => console.log('fulfilled'),
        [getFilms.pending]: () => console.log('pending'),
        [getFilms.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const {setFilms, setLoading, setError} = filmsSlice.actions
export default filmsSlice.reducer
