import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return(
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png' alt='logo'/>
        </header >
    );
}