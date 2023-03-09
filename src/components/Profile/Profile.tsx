import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {profilePageType} from "../../Store";



export const Profile = (props:profilePageType & {updateStatus:(status:string) => void}) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}