import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {incrementPage, decrementtPage} from "../../store/movies.slice"

import {getMovies} from "../../store/movies.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';
import cssBtn from "../style/button.module.css";

const MoviesList = () => {

    const {movies, currentPage} = useSelector(state => state['moviesReducer']);

    const dispatch  = useDispatch();

    useEffect(()=>{
        dispatch(getMovies({data:currentPage}))
    },[currentPage])
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <div className={css.wrap_movie}>
                {movies.map(movie => <MoviesListCard key={movie.id}  item={movie}/>)}
                <div className={css.btn_page}>
                    <button className={cssBtn.btn} onClick={(e)=>{
                        if (currentPage > 1){
                            currentPage && dispatch(decrementtPage({page:currentPage-1}))
                            scrollTop()
                        }
                        e.disabled = true;
                    }}>Previous</button>
                    <button className={cssBtn.btn} onClick={()=> {
                            dispatch(incrementPage({page: currentPage + 1}))
                            scrollTop()
                    }}>Next</button>
                </div>

            </div>
        </div>
    );
};

export {MoviesList};