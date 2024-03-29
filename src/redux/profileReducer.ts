import {ActionsType, profilePageType, ProfileType} from "../Store";
import {Dispatch} from "redux";
import { profileApi, profileUsers } from "../api/api";

export type setUserProfileType = ReturnType<typeof setUserProfile>


export const addPostActionCreator = (newPostText:string): ActionsType => ({type: 'ADD-POST',newPostText})


export const setUserProfile = (profile:ProfileType) => {
    return {
        type: 'SET-USERS-PROFILE',
        profile
    } as const
}

export const setStatusProfile = (status:string) => {
    return {
        type: 'SET-STATUS-PROFILE',
        status
    } as const
}

export const getStatusProfileTC = (userId:string) =>{
    return (dispatch:Dispatch) => {
        profileApi.getStatus(userId).then(res => dispatch(setStatusProfile(res)))
    }
}

export const updateStatusProfileTC = (status:string) =>{
    return (dispatch:Dispatch) => {
        profileApi.updateStatus(status).then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatusProfile(status))
            }
        })
    }
}


export const getUserProfileTC = (userId:string) =>{
    return (dispatch:Dispatch) => {
         profileUsers(userId).then(res => dispatch(setUserProfile(res)))
    }
}

const initialState: profilePageType = {
    status:'',
    postData: [
        {
            id: 1,
            post: 'Holla',
            likeCount: 5,
            photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'
        },
        {
            id: 2,
            post: 'Shalom',
            likeCount: 10,
            photo: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg'
        }
    ],
    profile:{
        "aboutMe": "!!!!!",
        "contacts": {
            "facebook": "!!!!!",
            "website": null,
            "vk": "!!!!!",
            "twitter": "!!!!!!!!!!!!",
            "instagram": "!!!!!!!!!!!",
            "youtube": null,
            "github": "!!!!!!!!!!!!",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "!!!!!!!!!!!!!!",
        "fullName": "!!!!!!!!!!!!!",
        "userId": 1,
        "photos": {
            "small": ''/*"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"*/,
            "large": ''/*"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"*/
        }
    }
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPostText = action.newPostText

            let stateCopy = {
                ...state,
                postData:[...state.postData,{
                    id: state.postData.length + 1,
                    post: newPostText,
                    likeCount: 0,
                    photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'
                }]
            }

            return stateCopy;
        }
        case "SET-USERS-PROFILE":{
            return {...state,profile:action.profile}
        }
        case "SET-STATUS-PROFILE":{
            return {...state,status:action.status}
        }
        default:
            return state
    }

}
