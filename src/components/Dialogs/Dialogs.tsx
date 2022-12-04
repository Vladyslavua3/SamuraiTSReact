import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {dialogsType,messageType,messagesType} from "../../State";
import {createRef} from "react";

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
}


export const Dialogs = (props:DialogsProps) => {


    let dialogs = props.messages.dialogs

    let dialogsElement = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)

    let messages = props.messages.message

    let messageElement = messages.map(el => <Message message={el.message} id={el.id}/>)

    const newMessage = createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        if(newMessage.current){
            let message = newMessage.current.value
            alert(message)
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
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage}>Send Message</button>
    </div>
)
}