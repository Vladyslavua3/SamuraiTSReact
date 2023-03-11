import {ActionsType} from "../Store";

type messageType = {
    message: string
    id: number
}

type dialogsType = {
    id: string
    name: string
}


type messagesType = {
    message: Array<messageType>
    dialogs: Array<dialogsType>
}


export const addMessageAC = (newMessageText:string) => ({type: 'ADD-MESSAGE',newMessageText})




const initialState: messagesType = {
    message: [
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
    ],
    dialogs: [
        {
            id: '1',
            name: 'Nastya'
        },
        {
            id: '2',
            name: 'Vladlen'
        },
        {
            id: '3',
            name: 'Anastas'
        },
        {
            id: '4',
            name: 'Vladik'
        },

    ]
}


export const messagesReducer = (state: messagesType = initialState, action: ActionsType): messagesType => {


    let copyState;

    switch (action.type) {
        case "ADD-MESSAGE":
            let newText = action.newMessageText
            copyState = {
                ...state,
                message: [...state.message,
                    {id: state.message.length + 1, message: newText}
                ]
            }
            return copyState;
        default:
            return state
    }
}

