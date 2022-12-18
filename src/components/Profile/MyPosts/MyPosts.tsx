import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postDataType, profilePageType} from "../../../State";

type myPostsProps = {
    profilePage:profilePageType
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string) => void
}

export const MyPosts = (props:myPostsProps) => {

    let postsItem = props.profilePage.postData.map(el => <Post id={el.id} img={el.photo} post={el.post} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')

    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
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