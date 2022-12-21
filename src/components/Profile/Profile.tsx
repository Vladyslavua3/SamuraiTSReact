import React from "react";

import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPostACType, profilePageType, UpdatePostACType} from "../../State";


type profileProps = {
    profilePage:profilePageType
    dispatch: (action:addPostACType | UpdatePostACType ) => void
}


export const Profile = (props:profileProps) => {
    return (
        <div>
            <ProfileInfo back_photo={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'} user_photo={'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'}/>
            <MyPosts
                profilePage={props.profilePage}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}