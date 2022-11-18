import React from "react";
import s from "./Nav.module.css"

export const Nav = () => {
    return(
    <nav className={s.nav}>
        <div>
        <div className={s.item}>
            <a href='src/components/Nav/Nav#'>Profile</a>
        </div>
        <div>
            <a href='src/components/Nav/Nav#'>Messages</a>
        </div>
        <div>
            <a href='src/components/Nav/Nav#'>News</a>
        </div>
        <div>
            <a href='src/components/Nav/Nav#'>Music</a>
        </div>
        <div>
            <a href='src/components/Nav/Nav#'>Settings</a>
        </div>
        </div>
    </nav>
    )
}