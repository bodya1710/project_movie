import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies.slice";

const store = configureStore({
    reducer:{
        moviesReducer
    }
})

export default store