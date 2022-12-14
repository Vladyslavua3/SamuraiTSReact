import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";




export const Profile = () => {
    return (
        <div>
            <ProfileInfo back_photo={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'} user_photo={'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'}/>
            <MyPostsContainer />
        </div>
    )
}