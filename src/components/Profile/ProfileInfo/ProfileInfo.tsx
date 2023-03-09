import React from "react";
import {Preloader} from "../../common/Preloader";
import {ProfileType} from "../../../Store";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";


export type ProfileInfoProps = {
   profile:ProfileType
  status:string
  updateStatus:(status:string) => void
}



export const ProfileInfo = (props:ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader />
    }
    return(
        <div>

             <div className={s.user}>
                 <img className={s.user_photo}
                      src={props.profile.photos.small}
                 alt={'photo'}/>
                 <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
             </div>
        </div>
    )}
