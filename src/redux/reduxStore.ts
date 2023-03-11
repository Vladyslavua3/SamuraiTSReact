import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers({
    profilePage:profileReducer,
    messages:messagesReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer
})

export type AppStateType = ReturnType<typeof reducer>


 export const store = createStore(reducer,applyMiddleware(thunk));
