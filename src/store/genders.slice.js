import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {gendersService} from "../services/genders.service";



export const getGenders = createAsyncThunk(
    'gendersSlice/getGenders',
    async (_,{rejectWithValue})=>{
        try {
            const genders = await gendersService.getAll()
            return genders
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getGendersListMovies = createAsyncThunk(
    'gendersSlice/getGendersListMovies',
    async ({id,currentPage},{rejectWithValue})=>{
        try {
            const gendersListMovie = await gendersService.getById(id,currentPage)
            return gendersListMovie
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const gendersSlice = createSlice({
    name:'gendersSlice',
    initialState: {
        genders: null,
        gendersListMovie: null,
        status: null,
        error: null,
        currentPage: 2
    },
    reducers:{
        incrementPage:(state, action)=>{
            state.currentPage = action.payload.page
        },
        decrementtPage:(state, action)=> {
            state.currentPage = action.payload.page
        },
        firsPage:(state, action)=> {
            state.currentPage = action.payload.page
        }
    },
    extraReducers: {
        [getGenders.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getGenders.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genders = action.payload
        },
        [getGenders.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getGendersListMovies.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getGendersListMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.gendersListMovie = action.payload
        },
        [getGendersListMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
     }
    })
    const gendersReducer = gendersSlice.reducer;
    export const {incrementPage, decrementtPage, firsPage} = gendersSlice.actions;
    export default gendersReducer
