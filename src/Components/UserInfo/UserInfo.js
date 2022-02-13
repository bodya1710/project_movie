import React from 'react';

import css from "./UserInfo.module.css"
import cssBtn from "../style/button.module.css"

const UserInfo = () => {
    return (
        <div>
            <div className={css.wrap_user_log}>
                <button onClick={(e)=>e.preventDefault()} className={cssBtn.btn}>Log in or register</button>
            </div>
            <div className={css.wrap_users_item}>
                <div><h2>Subscriptions</h2></div>
                <div><h2>Certificates and promo codes</h2></div>
                <div><h2>Favorites</h2></div>
            </div>
        </div>
    );
};

export {UserInfo};