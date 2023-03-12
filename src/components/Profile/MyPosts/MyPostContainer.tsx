import React from "react";
import {profilePageType} from "../../../Store";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateContainerProps = {
    profilePage:profilePageType
}

type MapDispatchPropsType = {
    addPost:(newPostText:string) => void
}
export type MyPostPropsType = MapDispatchPropsType & MapStateContainerProps


let mapStateToProps = (state:AppStateType):MapStateContainerProps => {
    return{
        profilePage:state.profilePage,
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return{
        addPost:(newPostText)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer  = connect(mapStateToProps,mapDispatchToProps)(MyPosts);