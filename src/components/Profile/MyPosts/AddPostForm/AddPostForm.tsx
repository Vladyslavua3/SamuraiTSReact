import { maxLengthCreator, minLengthCreator, requiredField } from "../../../../utils/validators/validator";
import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../../../common/FormControls/FormsControls";

export type AddNewPostType = {
  newPostText: string
}

const maxLength = maxLengthCreator(15);
const minLength = minLengthCreator(1);

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Input}
             name={"newPostText"}
             type={"text"}
             validate={[requiredField, maxLength, minLength]}
             placeholder={"Enter what in your mind"}
      />
      <button>Add Post</button>
    </form>
  );
};

export const AddNewPostFormRedux = reduxForm<AddNewPostType>({form:'profileNewPostForm'})(AddNewPostForm)