import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet} from "react-router-dom";

import {getGenders} from "../../store/genders.slice";
import css from "./GenreBadge.module.css";

const GenreBadge = () => {

    const{genders} = useSelector(state => state['gendersReducer']);

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getGenders())
    },[])

    return (
        genders && (
        <div>
            <div className={css.nav_genders}>
                {genders.genres.map(gender => <NavLink key={gender.id} to={gender.id+''}>{gender.name}</NavLink> )}
            </div>
            <div><Outlet/></div>
        </div>
        )
    );
};

export {GenreBadge};