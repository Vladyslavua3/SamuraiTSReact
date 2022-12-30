import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sideBarReducer} from "./sideBarReducer";

const reducer = combineReducers({
    profilePage:profileReducer,
    messages:messagesReducer,
    sideBar:sideBarReducer
})

export type AppStateType = ReturnType<typeof reducer>

 export const store = createStore(reducer);