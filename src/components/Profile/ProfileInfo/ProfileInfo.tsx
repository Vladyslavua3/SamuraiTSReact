
import s from "./ProfileInfo.module.css";
import React from "react";


type ProfileInfoProps = {
    back_photo:string
    user_photo:string
}



export const ProfileInfo = (props:ProfileInfoProps) => {
    return(
        <div>
             <img className={s.background_photo}
                  src={props.back_photo}/>
             <div className={s.user}>
                 <img className={s.user_photo}
                      src={props.user_photo}/>
             </div>
        </div>
    )}
