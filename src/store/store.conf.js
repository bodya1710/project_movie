import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies.slice";
import gendersReducer from "./genders.slice"

const store = configureStore({
    reducer:{
        moviesReducer,
        gendersReducer
    }
})

export default store