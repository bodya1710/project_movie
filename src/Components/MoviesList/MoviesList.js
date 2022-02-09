import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovies} from "../../store/movies.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

const MoviesList = () => {

    const {movies, totalPages, currentPage} = useSelector(state => state['moviesReducer']);

    const dispatch  = useDispatch();

    useEffect(()=>{
        dispatch(getMovies())
    },[])

    // const pages = []
    // for (let i = 0; i < totalPages; i++) {
    //     pages.push(totalPages[i]);
    // }

    return (
        <div>
            <div className={css.wrap_movie}>
                {movies.map(movie => <MoviesListCard key={movie.id}  item={movie}/>)}
            </div>
            {/*<div>*/}
            {/*    {pages.map((page, index)=> <span*/}
            {/*        key={index}*/}
            {/*        className={currentPage === page ? css.curent_page : css.page}*/}
            {/*    >{page}</span>)}*/}
            {/*</div>*/}

        </div>
    );
};

export {MoviesList};