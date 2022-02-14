import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {decrementtPage, incrementPage} from "../../store/genders.slice";
import {getGendersListMovies} from "../../store/genders.slice";
import css from "../MoviesList/MoviesList.module.css";
import cssBtn from "../style/button.module.css"
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const GenderListMovie = () => {

    const {gendersListMovie, currentPage} = useSelector(state => state['gendersReducer']);

    const dispatch  = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getGendersListMovies({id,currentPage}))
    },[currentPage,id])
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        gendersListMovie &&(
        <div>
            <div className={css.wrap_movie}>
                {gendersListMovie.results.map(item => <MoviesListCard key={item.id} item={item}/>)}
            </div>
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
        )
    );
};

export {GenderListMovie};