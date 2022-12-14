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
    newMessageText: string
    message: Array<messageType>
    dialogs: Array<dialogsType>
}


export const addMessageAC = (): ActionsType => ({type: 'ADD-MESSAGE'})

export const updateNewMessageAC = (message: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        message: message
    } as const
}


const initialState: messagesType = {
    newMessageText: '',
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
            let newText = state.newMessageText
            copyState = {
                ...state,
                message: [...state.message,
                    {id: state.message.length + 1, message: newText}
                ]
            }
            return {...copyState};
        case "UPDATE-MESSAGE-TEXT":
            copyState = {
                ...state,
                newMessageText: action.message
            }
            return {...copyState};
        default:
            return state
    }
}

