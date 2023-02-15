import React, { FC } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { getAuthUserDataTC, initialStateType } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';

import { Header } from './Header';

type MapDispatchToProps = {
  getAuthUserDataTC: () => void;
};

type headerContainerType = initialStateType & MapDispatchToProps;

class HeaderContainer extends React.Component<headerContainerType> {
  componentDidMount() {
    this.props.getAuthUserDataTC();
  }

  render() {
    return (
      <Header
        {...this.props}
        userId={this.props.userId}
        email={this.props.email}
        login={this.props.login}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): initialStateType => ({
  userId: state.auth.userId,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});
export default compose<FC>(connect(mapStateToProps, { getAuthUserDataTC }))(
  HeaderContainer,
);
