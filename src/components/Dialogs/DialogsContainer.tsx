import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addMessageAC, updateNewMessageAC } from '../../redux/messagesReducer';
import { AppStateType } from '../../redux/reduxStore';
import { messagesType } from '../../Store';

import { Dialogs } from './Dialogs';

type MapStateContainerProps = {
  messages: messagesType;
};

type MapDispatchPropsType = {
  addMessage: () => void;
  onChange: (text: string) => void;
};

export type DialogsPropsType = MapDispatchPropsType & MapStateContainerProps;

const mapStateToProps = (state: AppStateType): MapStateContainerProps => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
  addMessage: () => {
    dispatch(addMessageAC());
    dispatch(updateNewMessageAC(''));
  },
  onChange: (text: string) => {
    dispatch(updateNewMessageAC(text));
  },
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
