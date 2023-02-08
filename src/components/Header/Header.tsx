import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {initialStateType} from "../../redux/authReducer";

export const Header = (props: initialStateType) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png'
                alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.email
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}