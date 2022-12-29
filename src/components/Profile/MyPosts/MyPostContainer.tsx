import React from "react";
import {profilePageType} from "../../../Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type myPostsPropsContainer = {
    profilePage:profilePageType
}


export const MyPostsContainer = () => {
    return(
    <StoreContext.Consumer>{
        (store) => {
            const state = store.getState();
            const addPost = () => {
                store.dispatch(addPostActionCreator())
                store.dispatch(updateNewPostTextActionCreator(''))
            }

            const onPostChange = (text: string) => {
                store.dispatch(updateNewPostTextActionCreator(text))
            }

            return (
                <MyPosts profilePage={state.profilePage} addPost={addPost} updateNewPostText={onPostChange}
                         newPostText={state.profilePage.newPostText}/>
            )
        }
    }
    </StoreContext.Consumer>
    )
}