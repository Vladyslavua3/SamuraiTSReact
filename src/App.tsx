import React from 'react';

import './App.css';
import { Route } from 'react-router-dom';

import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Music } from './components/Music/Music';
import { Nav } from './components/Nav/Nav';
import { News } from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Settings } from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
