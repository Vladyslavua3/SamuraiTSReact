import React from "react";
import classes from "./Nav.module.css"

export const Nav = () => {
    return(
    <nav className={classes.nav}>
        <div>
        <div className={classes.item}>
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