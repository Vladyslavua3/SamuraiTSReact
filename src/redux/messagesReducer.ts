import {ActionsType, messagesType, messageType} from "../Store";

export const addMessageAC = ():ActionsType => ({type:'ADD-MESSAGE'})

export const updateNewMessageAC = (message:string) => {
    return{
        type:'UPDATE-MESSAGE-TEXT',
        message:message
    }as const
}

export const messagesReducer = (state: messagesType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: messageType = {
                id: state.message.length + 1,
                message: state.newMessageText
            }
            state.message.push(newMessage);
            return state;
        case "UPDATE-MESSAGE-TEXT":
            state.newMessageText = action.message;
            return state;
        default:return state
    }
}

