import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";



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


type AddNewPostType = {
  newPostText:string
}


const AddNewPostForm:React.FC<InjectedFormProps<AddNewPostType>> = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newPostText'} type={'text'} />
      <button>Add Post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<AddNewPostType>({form:'profileNewPostForm'})(AddNewPostForm)