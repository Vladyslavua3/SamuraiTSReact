import React, { ChangeEvent } from 'react';

import { NavLink } from 'react-router-dom';

import { dialogsType, messageType } from '../../Store';

import s from './Dialogs.module.css';
import { DialogsPropsType } from './DialogsContainer';

function DialogItem(props: dialogsType) {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

function Message(props: messageType) {
  return <div className={s.message}>{props.message}</div>;
}

export function Dialogs(props: DialogsPropsType) {
  const { dialogs } = props.messages;

  const dialogsElement = dialogs.map(el => (
    <DialogItem key={el.id} id={el.id} name={el.name} />
  ));

  const messages = props.messages.message;

  const messageElement = messages.map(el => (
    <Message key={el.id} message={el.message} id={el.id} />
  ));

  const addMessage = () => {
    props.addMessage();
    props.onChange('');
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      const text = e.currentTarget.value;
      props.onChange(text);
    }
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
      <div>
        <textarea
          placeholder="Enter your message"
          onChange={onChange}
          value={props.messages.newMessageText}
        />
        <button onClick={addMessage}>Send Message</button>
      </div>
    </div>
  );
}
