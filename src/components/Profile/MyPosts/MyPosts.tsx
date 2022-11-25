import React from "react";

import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postDataType} from "../../../State";

type myPostsProps = {
    posts:Array<postDataType>
}

export const MyPosts = (props:myPostsProps) => {


   let postData = props.posts

  let postsItem = postData.map(el => <Post img={el.photo} post={el.post} likeCount={el.likeCount}/>)


    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>
            <div>
                {postsItem}
            </div>
        </div>

    )
}