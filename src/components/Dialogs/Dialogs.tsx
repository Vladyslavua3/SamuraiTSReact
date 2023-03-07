import React from "react";
import s from './Dialogs.module.css'
import { NavLink, Redirect } from "react-router-dom";
import {dialogsType, messageType} from "../../Store";
import {ChangeEvent} from "react";
import {DialogsPropsType} from "./DialogsContainer";

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


    let addMessage = () => {
        props.addMessage()
        props.onChange('')
    }

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget) {
            const text = e.currentTarget.value
            props.onChange(text)
        }
    }

   if(!props.isAuth) return <Redirect to='/login'/>


return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messageElement}
        </div>
        <div>
        <textarea  placeholder={'Enter your message'} onChange={onChange} value={props.messages.newMessageText}></textarea>
        <button onClick={addMessage}>Send Message</button>
        </div>
    </div>
)
}