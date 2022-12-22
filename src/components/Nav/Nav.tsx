import React from "react";
import s from "./Nav.module.css"
import { NavLink} from "react-router-dom";


export const Nav = () => {
    return(
    <nav className={s.nav}>
        <div>
            <NavLink to='/profile' className={({isActive})=>isActive?s.activeLink:''}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className={({isActive})=>isActive?s.activeLink:''}>Messages</NavLink>
        </div>
        <div>
            <NavLink to='/news' className={({isActive})=>isActive?s.activeLink:''}>News</NavLink>
        </div>
        <div>
            <NavLink to='/music' className={({isActive})=>isActive?s.activeLink:''}>Music</NavLink>
        </div>
        <div>
            <NavLink to='/settings'  className={({isActive})=>isActive?s.activeLink:''}>Settings</NavLink>
        </div>
    </nav>
    )
}