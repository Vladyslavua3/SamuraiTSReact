import {
    followActionCreator,
    FollowACType,
    setCurrentPageACType, setIsFetchingACType,
    SetUsersACType, setUsersTotalCountACType, toggleIsFollowingACType,
    UnFollowACType
} from "./redux/usersReducer";
import {setUserProfileType} from "./redux/profileReducer";

export type dialogsType = {
    id: string
    name: string
}

export type postDataType = {
    id: number
    post: string
    likeCount: number
    photo: string
}

export type messageType = {
    message: string
    id: number
}

export type profilePageType = {
    newPostText:string
    postData: Array<postDataType>
    profile:ProfileType
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string
        vk: string
        twitter: string
        instagram: string
        youtube: null | string
        github: string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type messagesType = {
    newMessageText:string
    message: Array<messageType>
    dialogs:Array<dialogsType>
}

export type stateType = {
    profilePage: profilePageType
    messages: messagesType
}

export type addPostACType = {
    type: 'ADD-POST'
}

export type UpdatePostACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText:string
}

export type addMessageACType = {
    type:'ADD-MESSAGE'
}

export type UpdateMessageACType = {
    type:'UPDATE-MESSAGE-TEXT',
    message:string
}


export type ActionsType =
    addPostACType
    | UpdatePostACType
    | addMessageACType
    | UpdateMessageACType
    | UnFollowACType
    | FollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | setIsFetchingACType
    |setUserProfileType
    | toggleIsFollowingACType

// export type StoreType = {
//     _state:stateType
//     _callSubscriber:(callback: () => void) => void
//     getState:() => stateType
//     subscribe:(callback:()=>void) => void
//     dispatch:(action:ActionsType ) => void
// }
///////////////////////////////REDUCER REDUX//////////////////////////////////////////

//
// export let store:StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: 'LOL',
//             postData: [
//                 {
//                     id: 1,
//                     post: 'Holla',
//                     likeCount: 5,
//                     photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'
//                 },
//                 {
//                     id: 2,
//                     post: 'Shalom',
//                     likeCount: 10,
//                     photo: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg'
//                 }
//             ]
//         },
//         messages: {
//             newMessageText:'Hi',
//             message: [
//                 {
//                     id: 1,
//                     message: 'Hi'
//                 },
//                 {
//                     id: 2,
//                     message: 'How are you'
//                 },
//                 {
//                     id: 3,
//                     message: 'Holla'
//                 },
//                 {
//                     id: 4,
//                     message: 'Whatsuuuuup?'
//                 }
//             ],
//             dialogs: [
//                 {
//                     id: '1',
//                     name: 'Nastya'
//                 },
//                 {
//                     id: '2',
//                     name: 'Vladlen'
//                 },
//                 {
//                     id: '3',
//                     name: 'Anastas'
//                 },
//                 {
//                     id: '4',
//                     name: 'Vladik'
//                 },
//
//             ]
//         }
//     },
//     // _onChange() {
//     //     console.log('change')
//     // },
//
//     // subscribe(callback: () => void) {
//     //     this._onChange = callback
//     // },
//     getState(){
//         return this._state
//     },
//
//     dispatch(action){
//
//         this._state.profilePage = profileReducer(this._state.profilePage,action)
//
//         this._state.messages = messagesReducer(this._state.messages,action)
//
//         // this._onChange()
//     }
//
// }
