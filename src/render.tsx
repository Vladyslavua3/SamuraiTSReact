import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, stateType, updateNewPostText} from "./State";



export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    document.getElementById('root'),
);
}