import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import {getDetails} from "../../store/movies.slice";
import {urlImgBc} from "../../constans/urls.img";


const GenreBadge = () => {

    const {moviesDetails} = useSelector(state => state['moviesReducer']);

    // const {backdrop_path, title, status, vote_average, overview, genres} = moviesDetails;

    const dispatch  = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getDetails({data:id}))
    },[])
    console.log(moviesDetails)
    return (
        moviesDetails && (
        <div>
            <img src={urlImgBc+moviesDetails.poster_path} alt=''/>


        </div>
        )
    );
};

export {GenreBadge};