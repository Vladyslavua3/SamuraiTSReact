import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {dialogsType, messageType, messagesType, ActionsType} from "../../Store";
import {ChangeEvent, createRef} from "react";
import {addMessageAC, updateNewMessageAC} from "../../redux/messagesReducer";

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

type DialogsProps = {
    messages:messagesType
    dispatch: (action:ActionsType ) => void
}

export const Dialogs = (props:DialogsProps) => {


    let dialogs = props.messages.dialogs

    let dialogsElement = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)

    let messages = props.messages.message

    let messageElement = messages.map(el => <Message message={el.message} id={el.id}/>)


    let addMessage = () => {
        props.dispatch(addMessageAC())
        props.dispatch(updateNewMessageAC(''))
    }

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget) {
            props.dispatch(updateNewMessageAC(e.currentTarget.value))
        }
    }
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