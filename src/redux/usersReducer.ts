import {ActionsType} from "../Store";


export type UserType = {
    id:number,
    fullName:string
    status:string
    followed:boolean
    photo:string
    location:{
        city:string
        country:string
    }
}

export type UsersType = {
    users:UserType[]
}

export type FollowACType = ReturnType<typeof followActionCreator>

export type UnFollowACType = ReturnType<typeof unfollowActionCreator>

export type SetUsersACType = ReturnType<typeof setUsersAC>


export const followActionCreator = (userId:number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unfollowActionCreator = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}


export const setUsersAC = (users:any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}





const initialState: UsersType = {
    users: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType=> {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users:state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        case "UNFOLLOW":  
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "SET-USERS":{
            return {...state,users:[...state.users,...action.users]}
        }


        default :
            return state
    }
}
