import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";



export const MyPosts = (props:MyPostPropsType) => {

    let postsItem = props.profilePage.postData.map(el => <Post key={el.id} id={el.id} img={el.photo} post={el.post} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.updateNewPostText(text)
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