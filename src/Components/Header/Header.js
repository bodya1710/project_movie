import React from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import user from '../../img/icon_user.png'
const Header = () => {
    return (
        <div className={css.header_wraper}>
            <div className={css.header_container}>
                <div className={css.header_container_link}>
                    <NavLink to="/">Movies</NavLink>
                    <NavLink to="/gender">Genres</NavLink>
                    <NavLink to="/user"><img src={user}/></NavLink>
                </div>

            </div>

        </div>
    );
};

export {Header};