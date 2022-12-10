import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, stateType, subscribe, updateNewPostText} from "./State";
import {state} from "./State";


const rerenderEntireTree = (s:stateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'),
    );
}

rerenderEntireTree(state)

subscribe(()=>rerenderEntireTree(state))