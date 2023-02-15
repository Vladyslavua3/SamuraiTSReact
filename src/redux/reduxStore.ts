import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './authReducer';
import { messagesReducer } from './messagesReducer';
import { profileReducer } from './profileReducer';
import { sideBarReducer } from './sideBarReducer';
import { usersReducer } from './usersReducer';

const reducer = combineReducers({
  profilePage: profileReducer,
  messages: messagesReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export type AppStateType = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(thunk));
