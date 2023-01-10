import UsersC from "./UsersC";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followActionCreator,
    InitialType,
    setUsersAC,
    unfollowActionCreator,
} from "../../redux/usersReducer";

export type mapDispatchType = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:InitialType[]) => void
}

export type mapStateType = {
    users:InitialType
}

export type usersContainerType = mapDispatchType & mapStateType

let mapStateToProps = (state:AppStateType):mapStateType=> {
    return{
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchType => {
    return{
        follow:(userId:number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId:number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers:(users:InitialType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)