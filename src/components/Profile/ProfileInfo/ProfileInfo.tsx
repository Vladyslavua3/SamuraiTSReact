
import s from "./ProfileInfo.module.css";
import React from "react";
import {Preloader} from "../../common/Preloader";
import {ProfileType} from "../../../Store";


type ProfileInfoProps = {
   profile:ProfileType
}



export const ProfileInfo = (props:ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader />
    }
    return(
        <div>
             {/*<img className={s.background_photo}*/}
             {/*     src={''}/>*/}
             <div className={s.user}>
                 <img className={s.user_photo}
                      src={props.profile.photos.small}
                 alt={'photo'}/>
                 {props.profile.aboutMe}
             </div>
        </div>
    )}
