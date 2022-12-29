import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";
import {StoreType} from "./Store";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'),
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
