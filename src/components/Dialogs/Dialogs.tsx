import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
;

type DialogItemProps = {
    id:string
    name:string
}


const DialogItem = (props:DialogItemProps) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemProps = {
    message:string
    id:number
}


const Message = (props:MessageItemProps) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}



export const Dialogs = () => {

    const DialogsArr:Array<DialogItemProps> = [
        {
            id: '1',
            name:'Nastya'
        },
        {
            id: '2',
            name:'Vladlen'
        },
        {
            id: '3',
            name:'Anastas'
        },
        {
            id: '4',
            name:'Vladik'
        },

    ]

    let dialogsElement = DialogsArr.map(el => <DialogItem id={el.id} name={el.name}/>)


    const MessageArr:Array<MessageItemProps> = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you'
        },
        {
            id: 3,
            message: 'Holla'
        },
        {
            id: 4,
            message: 'Whatsuuuuup?'
        }
    ]

    let messageElement = MessageArr.map(el => <Message message={el.message} id={el.id}/>)



return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messageElement}
        </div>
    </div>
)
}