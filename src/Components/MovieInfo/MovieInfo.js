import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import css from './MovieInfo.module.css';
import {getDetails} from "../../store/movies.slice";
import {urlImg, urlImgBc} from "../../constans/urls.img";

const MovieInfo = () => {
    const {moviesDetails} = useSelector(state => state['moviesReducer']);

    const dispatch  = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getDetails({data:id}))
    },[id])
    console.log(moviesDetails)
    return (
        moviesDetails && (
            <div className={css.movie_inf0_wrap}>
                <div>
                    <div>
                        <h2>{moviesDetails.title}</h2>
                        <div className={css.production_countries_container}><p>Production countries:</p>
                            {moviesDetails.production_countries.map((item, index) => <p key={index}>{item.name}</p>)}</div>
                        <p>{moviesDetails.overview}</p>
                        <div className={css.reting_container}>
                            <h2 className={css.rating_num}>{moviesDetails.vote_average}</h2>
                            <p>Rating</p>
                        </div>
                    </div>
                    <div className={css.production_companies_container}>
                        <h2>Production_companies:</h2>
                        {moviesDetails.production_companies.map((item, index) =>
                            <div key={index}>
                                {<NavLink exact to = {`/`+item.id+`/movieInfo`} >
                                    <p>- {item.name}</p>
                                </NavLink>}
                            </div>)}
                    </div>
                </div>
                <img src={urlImg+moviesDetails.poster_path} alt=''/>
            </div>
        )
    );
};

export {MovieInfo};