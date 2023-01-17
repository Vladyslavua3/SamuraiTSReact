import {combineReducers, createStore} from "redux";
import {profileReducer, setUserProfile} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";

const reducer = combineReducers({
    profilePage:profileReducer,
    messages:messagesReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof reducer>


 export const store = createStore(reducer);
