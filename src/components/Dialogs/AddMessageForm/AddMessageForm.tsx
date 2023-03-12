import { maxLengthCreator, minLengthCreator, requiredField } from "../../../utils/validators/validator";
import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../../common/FormControls/FormsControls";

export type DialogsFormType = {
  newMessageText:string
}


const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(1);

const AddMessageForm:React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field      component={Input}
                    name={'newMessageText'}
                    type={'text'}
                    placeholder={'Enter your message'}
                    validate={[requiredField,maxLength,minLength]}
        ></Field>
        <button>Send Message</button>
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm<DialogsFormType>({form:'dialogAddMessageForm'})(AddMessageForm)