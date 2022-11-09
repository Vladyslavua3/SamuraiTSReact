import React from "react";

export const Profile = () => {
    return (
        <div className='content'>
            <img className='background_photo'
                 src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            <div>
                <img className='user_photo'
                     src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'/>
            </div>
            <div>
                My Post
                <div>New Post</div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}