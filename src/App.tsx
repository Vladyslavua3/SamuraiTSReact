import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./Store";
import {store} from "./redux/reduxStore";


// type AppProps = {
//     store: StoreType
// }


const App = () => {
    // const state = props.store.getState()
    const stateTwo = store.getState()


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs messages={stateTwo.messages} dispatch={store.dispatch.bind(store)}/>}/>
                        <Route path='/profile' element={<Profile profilePage={stateTwo.profilePage}
                                                                 dispatch={store.dispatch.bind(store)}
                                                                 />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
