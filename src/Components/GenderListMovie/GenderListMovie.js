import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getGendersListMovies} from "../../store/genders.slice";
import css from "../MoviesList/MoviesList.module.css";


const GenderListMovie = () => {

    const {gendersListMovie, currentPage} = useSelector(state => state['gendersReducer']);

    const dispatch  = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getGendersListMovies({data:id}))
    },[])
    console.log(gendersListMovie)
    return (
        <div>


            {/*<div className={css.btn_page}>*/}
            {/*    <button onClick={(e)=>{*/}
            {/*        if (currentPage > 1){*/}
            {/*            currentPage && dispatch(decrementtPage({page:currentPage-1}))*/}
            {/*            scrollTop()*/}
            {/*        }*/}
            {/*        e.disabled = true;*/}
            {/*    }}>Previous</button>*/}
            {/*    <button onClick={()=> {*/}
            {/*        dispatch(incrementPage({page: currentPage + 1}))*/}
            {/*        scrollTop()*/}
            {/*    }}>Next</button>*/}
            {/*</div>*/}
        </div>

    );
};

export {GenderListMovie};