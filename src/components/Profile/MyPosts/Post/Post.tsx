import React from "react";

import p from "./Post.module.css"

type PostProps = {
    img:string
    post:string
    likeCount:number
}


export const Post = (props:PostProps) => {
    return (
        <div>
            <div className={p.item}>
                <img src={props.img}/>
                {props.post}
               <div>{props.likeCount}</div>
            </div>
        </div>

    )
}