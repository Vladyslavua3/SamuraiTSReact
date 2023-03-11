import React from "react";
import s from './Dialogs.module.css'
import { NavLink, Redirect } from "react-router-dom";
import {dialogsType, messageType} from "../../Store";
import {ChangeEvent} from "react";
import {DialogsPropsType} from "./DialogsContainer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

const DialogItem = (props:dialogsType) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props:messageType) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export const Dialogs = (props:DialogsPropsType) => {


    let dialogs = props.messages.dialogs

    let dialogsElement = dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)

    let messages = props.messages.message

    let messageElement = messages.map(el => <Message key={el.id} message={el.message} id={el.id}/>)


  let addNewMessage = (value:DialogsFormType) => {
      props.addMessage(value.newMessageText)
  }


return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messageElement}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
)
}

type DialogsFormType = {
  newMessageText:string
}

const AddMessageForm:React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field      component={'textarea'}
                    name={'newMessageText'}
                    type={'text'}
                    placeholder={'Enter your message'}
        ></Field>
        <button>Send Message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<DialogsFormType>({form:'dialogAddMessageForm'})(AddMessageForm)