import React from "react";

import p from "./Profile.module.css"


export const Profile = () => {
    return (
        <div className={p.content}>
            <img className={p.background_photo}
                 src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            <div>
                <img className={p.user_photo}
                     src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'/>
            </div>
            <div>
                <div>My Posts</div>
                <div>New Post</div>
                <div className='posts'>
                    <div className={p.item}>
                        post 1
                    </div>
                    <div className={p.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}