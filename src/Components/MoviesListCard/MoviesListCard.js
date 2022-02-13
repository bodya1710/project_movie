import React from 'react';

import css from './MoviesListCard.module.css'
import {urlImg} from "../../constans/urls.img";
import {NavLink} from "react-router-dom";

const MoviesListCard = ({item:{title, overview, id, vote_average, poster_path}}) => {

    return (
            <div className={css.movie_card}>
                <img src={urlImg+poster_path} alt={title}/>
                <p>{title}</p>
                <NavLink to={`/${id}/movieInfo`} className={css.movie_info_link}>
                    <div className={css.movie_info}>
                        <h2>{title}</h2>
                        <p>{overview}</p>
                        <p className={css.vote_average_container}>Rating: {vote_average}</p>
                    </div>
                </NavLink>

            </div>
    );
};

export {MoviesListCard};
//to={id.toString()} state={posts}>{id}) {title} </Link>