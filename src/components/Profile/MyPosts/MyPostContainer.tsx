import React from "react";
import {profilePageType} from "../../../Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateContainerProps = {
    profilePage:profilePageType
    newPostText:string
}

type MapDispatchPropsType = {
    addPost:() => void
    updateNewPostText:(text: string)=>void
}
export type MyPostPropsType = MapDispatchPropsType & MapStateContainerProps


let mapStateToProps = (state:AppStateType):MapStateContainerProps => {
    return{
        profilePage:state.profilePage,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return{
        addPost:()=>{
            dispatch(addPostActionCreator())
            dispatch(updateNewPostTextActionCreator(''))
        },
        updateNewPostText:(text: string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer  = connect(mapStateToProps,mapDispatchToProps)(MyPosts);