import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";


export const getDetails = createAsyncThunk(
    'moviesSlice/getDetails',
    async ({data},{rejectWithValue})=>{
        try {
            const moviesDetails = await moviesService.getById(data)
            return moviesDetails
        }catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({data},{rejectWithValue})=>{
        try {
            const movies = await moviesService.getAll(data);
            return movies
        }catch (e) {
            return  rejectWithValue(e.message)
        }
    }
)



const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState:{
        movies:[],
        moviesDetails: null,
        status: null,
        error:null,
        currentPage:1
    },
    reducers:{
        incrementPage:(state, action)=>{
            state.currentPage = action.payload.page
        },
        decrementtPage:(state, action)=>{
            state.currentPage = action.payload.page
        }
    },
    extraReducers:{
        [getMovies.pending]:(state, action)=>{
            state.status = 'pending'
            state.error = null
        },
        [getMovies.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.movies = action.payload.results
        },
        [getMovies.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        },
        [getDetails.pending]:(state, action)=>{
            state.status = 'pending'
            state.error = null
        },
        [getDetails.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.moviesDetails = action.payload
        },
        [getDetails.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const moviesReducer = moviesSlice.reducer;

export const {incrementPage, decrementtPage} = moviesSlice.actions;

export default moviesReducer