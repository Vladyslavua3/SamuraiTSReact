import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/reduxStore";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root'),
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)