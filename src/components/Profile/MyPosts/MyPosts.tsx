import React from "react";

import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";



export const MyPosts = () => {

    const postData = [
        {
            id:1,
            post:'Holla',
            likeCount:5,
            photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'
        },
        {
            id:2,
            post:'Shalom',
            likeCount:10,
            photo: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg'
        }
    ]

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