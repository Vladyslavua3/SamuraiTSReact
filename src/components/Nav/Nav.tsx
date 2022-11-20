import React from "react";
import s from "./Nav.module.css"

export const Nav = () => {
    return(
    <nav className={s.nav}>
        <div>
        <div className={s.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div>
            <a href='/dialogs'>Messages</a>
        </div>
        <div>
            <a href='/news'>News</a>
        </div>
        <div>
            <a href='/music'>Music</a>
        </div>
        <div>
            <a href='settings'>Settings</a>
        </div>
        </div>
    </nav>
    )
}