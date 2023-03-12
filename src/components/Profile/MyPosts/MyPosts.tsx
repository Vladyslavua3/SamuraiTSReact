import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";
import { AddNewPostFormRedux, AddNewPostType } from "./AddPostForm/AddPostForm";



export const MyPosts = (props:MyPostPropsType) => {

    let postsItem = props.profilePage.postData.map(el => <Post key={el.id} id={el.id} img={el.photo} post={el.post} likeCount={el.likeCount}/>)



    const addPostForm = (value:AddNewPostType) => {
      props.addPost(value.newPostText)
    }


  return (
    <div className={s.posts}>
      <h2>My Posts</h2>
      <AddNewPostFormRedux onSubmit={addPostForm}/>
      <div>
        {postsItem}
      </div>
    </div>

  );
}


