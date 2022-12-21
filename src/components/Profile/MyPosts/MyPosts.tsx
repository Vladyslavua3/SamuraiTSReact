import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostACType, postDataType, profilePageType, UpdatePostACType} from "../../../State";

type myPostsProps = {
    profilePage:profilePageType
    newPostText:string
    dispatch: (action:addPostACType | UpdatePostACType ) => void
}

export const MyPosts = (props:myPostsProps) => {

    let postsItem = props.profilePage.postData.map(el => <Post id={el.id} img={el.photo} post={el.post} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch({type:'ADD-POST'})
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:''})
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:newPostElement.current.value})
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