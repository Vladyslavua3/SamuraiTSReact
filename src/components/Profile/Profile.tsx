import React from "react";

import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div>
            <img className={s.background_photo}
                 src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            <div>
                <img className={s.user_photo}
                     src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )
}