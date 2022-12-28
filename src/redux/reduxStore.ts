import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sideBarReducer} from "./sideBarReducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    messages:messagesReducer,
    sideBar:sideBarReducer
})


 export const store = createStore(reducers);