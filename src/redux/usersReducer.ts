import {ActionsType} from "../Store";

export type FollowACType = ReturnType<typeof followActionCreator>

export type UnFollowACType = ReturnType<typeof unfollowActionCreator>

export type SetUsersACType = ReturnType<typeof setUsersAC>

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>


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

export const setCurrentPageAC = (currentPage:number) => {
    return{
        type:'SET-PAGE',
        currentPage
    }as const
}

export const setUsersTotalCountAC = (total:number) => {
    return{
        type:'SET-TOTAL',
        total
    }as const
}


type UsersAxiosType = {
    name: string
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: null | string,
    followed: boolean
}

export type InitialType = {
    users:Array<UsersAxiosType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
}


const initialState: InitialType = {
    users: [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage:1
}

export const usersReducer = (state: InitialType = initialState, action: ActionsType):InitialType=> {

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
            return {...state,users:action.users }
        }
        case "SET-PAGE":{
            return {...state,currentPage:action.currentPage}
        }
        case "SET-TOTAL":{
            return {...state,totalUsersCount:action.total < 200 ? action.total : 50}
        }
        default :
            return state
    }
}
