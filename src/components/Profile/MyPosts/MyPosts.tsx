import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postDataType} from "../../../State";

type myPostsProps = {
    posts:Array<postDataType>
    addPost:(postMessage:string)=>void
}

export const MyPosts = (props:myPostsProps) => {

    let postsItem = props.posts.map(el => <Post img={el.photo} post={el.post} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
           if(newPostElement.current){
               props.addPost(newPostElement.current.value)
           }
       }

    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>Add Post</button>
            <div>
                {postsItem}
            </div>
        </div>

    )
}