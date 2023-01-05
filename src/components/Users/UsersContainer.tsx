import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followActionCreator, setUsersAC, unfollowActionCreator, UsersType, UserType} from "../../redux/usersReducer";

export type mapDispatchType = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:UserType[]) => void
}

export type mapStateType = {
    users:UserType[]
}

export type usersContainerType = mapDispatchType & mapStateType

let mapStateToProps = (state:AppStateType):mapStateType=> {
    return{
        users: state.usersPage.users
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
        setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)