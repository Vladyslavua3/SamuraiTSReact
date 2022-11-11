import React from "react";

import p from "./MyPosts.module.css"
import {Post} from "./Post/Post";



export const MyPosts = () => {
    return (
        <div>
            <div>My Posts</div>
            <div>New Post</div>
            <div className={p.posts}>
                <Post post={'post1'} likeCount={5} img={'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'}/>
                <Post post={'post2'} likeCount={10} img={'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg'}/>
            </div>
        </div>

    )
}