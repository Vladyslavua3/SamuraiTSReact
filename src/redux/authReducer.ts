import React from "react";
import {Dispatch} from "redux";
import {authApi} from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const RESET_USER_AUTH_DATA = 'RESET_USER_AUTH_DATA'

export type initialStateType = {
    userId:number | null
     email:string | null
     login:string | null
     isAuth:boolean
}
export type DataPropsType = {
    id: number | null
    email: string | null
    login: string | null

}

export type InitialStateOfAuthType = {
    resultCode: number | null
    messages: Array<string>
    data: DataPropsType
    isAuth: boolean
    captcha: boolean | null
    url: string | null
}


type ResetUserAT = {
    type: 'RESET_USER_AUTH_DATA'
    state: InitialStateOfAuthType
}

export type setUserDataACType = ReturnType<typeof setAuthUserData>

type allAuthAction = setUserDataACType | ResetUserAT

const initialState:initialStateType = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
}

const authReducer = (state = initialState,action:allAuthAction) => {
switch (action.type) {
    case SET_USER_DATA:{
        return{
            ...state,
            ...action.data,
            isAuth:true
        }
    }
    case RESET_USER_AUTH_DATA:
        return {...state, ...initialState}
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

const resetAuthDataAC = () => {
    return {type: RESET_USER_AUTH_DATA}
}

export const getAuthUserDataTC = () => {
    return (dispatch:Dispatch) => {
        authApi.me().then(res => {
            if(res.resultCode === 0){
                const {id,email,login} = res.data;
                dispatch(setAuthUserData(id,email,login))
            }
        })
    }
}


export const loginTC = (email:string,password:string,rememberMe:boolean) => {
    return (dispatch:any) => {

        authApi.login(email,password,rememberMe).then(res => {
            if(res.data.resultCode === 0){
               dispatch(getAuthUserDataTC())
            }
            if(res.data.resultCode === 10){
                dispatch(stopSubmit('login',{_error:res.data.messages[0]}))
            }else {
                dispatch(stopSubmit('login',{
                    _error:res.data.messages.length > 0 ? res.data.messages[0]:'Some Error'
                }))
            }
        })
    }
}


export const loginOutTC = () => {
    return (dispatch:Dispatch) => {
        authApi.loginOut().then(res => {
            if(res.data.resultCode === 0){
                dispatch(resetAuthDataAC())
            }
        })
    }
}

export default authReducer