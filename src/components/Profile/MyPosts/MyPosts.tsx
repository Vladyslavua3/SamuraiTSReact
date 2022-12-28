import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, profilePageType} from "../../../Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

type myPostsProps = {
    profilePage:profilePageType
    newPostText:string
    dispatch: (action:ActionsType ) => void
}



export const MyPosts = (props:myPostsProps) => {

    let postsItem = props.profilePage.postData.map(el => <Post id={el.id} img={el.photo} post={el.post} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(updateNewPostTextActionCreator(''))
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }


    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add Post</button>
            <div>
                {postsItem}
            </div>
        </div>

    )
}