
import {messagesType} from "../../Store";
import {addMessageAC, updateNewMessageAC} from "../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsContainerProps = {
    messages:messagesType
}

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messages
                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                        store.dispatch(updateNewMessageAC(''))
                    }

                    const onChange = (text: string) => {
                        store.dispatch(updateNewMessageAC(text))
                    }
                    return (
                        <Dialogs messages={state} addMessage={addMessage} onChange={onChange}/>
                    )
                }
            }
        </StoreContext.Consumer>
}