import React from "react";

const SET_USER_DATA = 'SET_USER_DATA'

export type initialStateType = {
    userId:number | null
     email:string | null
     login:string | null
     isFetching:boolean
}

export type setUserDataACType = ReturnType<typeof setAuthUserData>

const initialState:initialStateType = {
    userId:null,
    email:null,
    login:null,
    isFetching:false
}

const authReducer = (state = initialState,action:setUserDataACType) => {
switch (action.type) {
    case SET_USER_DATA:{
        return{
            ...state,
            ...action.data
        }
    }
    default:
        return state
}
}

export const setAuthUserData = (userId:number,email:string,login:string) => {
    return{
        type:SET_USER_DATA,
        data:{
            userId,
            email,
            login
        }
    }as const
}

export default authReducer