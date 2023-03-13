import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import { headerContainerType } from "./HeaderContainer";


export const Header = (props: headerContainerType) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png'
                alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth
                  ? <div>{props.email} - <button onClick={props.loginOutTC}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}