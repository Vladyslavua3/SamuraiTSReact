import {ActionsType, postDataType, profilePageType, ProfileType} from "../Store";
import {networkInterfaces} from "os";

export type setUserProfileType = ReturnType<typeof setUserProfile>


export const addPostActionCreator = (): ActionsType => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (newText: string): ActionsType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const setUserProfile = (profile:ProfileType) =>{
    return{
    type:'SET-USERS-PROFILE',
        profile
    }as const
}

const initialState: profilePageType = {
    newPostText: '',
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
            let newPostText = state.newPostText

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
        case "UPDATE-NEW-POST-TEXT":
            let stateCopy = {
                ...state,
                newPostText:action.newText
            }
            return stateCopy;
        case "SET-USERS-PROFILE":{
            return {...state,profile:action.profile}
        }
        default:
            return state
    }

}
