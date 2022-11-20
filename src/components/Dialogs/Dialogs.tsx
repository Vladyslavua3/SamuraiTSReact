import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogItemProps = {
    id:string
    name:string
}


const DialogfItem = (props:DialogItemProps) => {
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


return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogfItem id={'1'} name={'Nastya'}/>
            <DialogfItem id={'2'} name={'Vladlen'} />
            <DialogfItem id={'3'} name={'Anastas'} />
            <DialogfItem id={'4'} name={'Vladik'} />
        </div>
        <div className={s.messages}>
            <Message message={MessageArr[0].message} id={MessageArr[0].id}/>
            <Message message={MessageArr[3].message} id={MessageArr[3].id}/>
            <Message message={'Good'} id={3}/>
        </div>
    </div>
)
}