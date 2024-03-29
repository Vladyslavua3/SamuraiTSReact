import React, {FC} from "react";
import {messagesType} from "../../Store";
import {addMessageAC} from "../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


type MapStateContainerProps = {
    messages:messagesType
}

type MapDispatchPropsType = {
    addMessage:(newMessageText:string) => void
}

export type DialogsPropsType = MapDispatchPropsType & MapStateContainerProps


let mapStateToProps = (state:AppStateType):MapStateContainerProps => {
    return{
        messages:state.messages,
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
   return{
       addMessage:(newMessageText)=>{
           dispatch(addMessageAC(newMessageText))
       }
   }
}

export const DialogsContainer = compose<FC>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)