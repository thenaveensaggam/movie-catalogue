import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    movies: [],
    selectedMovie: {},
    errorMessage: null
}

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
    let dataUrl = `http://127.0.0.1:5000/api/movies`;
    let response = await axios.get(dataUrl);
    return response.data;
});

const movieListSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        selectTheMovie: function (state, action) {
            state.selectedMovie = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state, action) => {
            state.loading = true;
        }).addCase(getMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        }).addCase(getMovies.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = `Oops! Something goes wrong!`
        })
    }
});
export const {selectTheMovie} = movieListSlice.actions;
export default movieListSlice.reducer;


