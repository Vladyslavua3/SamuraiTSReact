import React from "react";
import {messagesType} from "../../Store";
import {addMessageAC, updateNewMessageAC} from "../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


type MapStateContainerProps = {
    messages:messagesType
    isAuth:boolean
}

type MapDispatchPropsType = {
    addMessage:() => void
    onChange:(text: string)=>void
}

export type DialogsPropsType = MapDispatchPropsType & MapStateContainerProps


let mapStateToProps = (state:AppStateType):MapStateContainerProps => {
    return{
        messages:state.messages,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
   return{
       addMessage:()=>{
           dispatch(addMessageAC())
           dispatch(updateNewMessageAC(''))
       },
       onChange:(text: string)=>{
           dispatch(updateNewMessageAC(text))
       }
   }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);