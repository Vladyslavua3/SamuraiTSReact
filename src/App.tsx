import React, { FC } from "react";
import './App.css';
import {Nav} from "./components/Nav/Nav";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login  from "./components/Login/Login";
import { Preloader } from "./components/common/Preloader";
import { AppStateType } from "./redux/reduxStore";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";


type MapStateToPropsType = {
  initialized: boolean
}
type MapDispatchToPropsType = {
  initializeApp: () => void
}

type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType & RouteComponentProps



class App extends React.Component<AuthPropsType>  {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default compose<FC>(connect(mapStateToProps, {
  initializeApp,
}), withRouter)(App)
