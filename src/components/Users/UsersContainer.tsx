import UsersC from "./UsersC";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followActionCreator,
    InitialType, setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowActionCreator,
} from "../../redux/usersReducer";

export type mapDispatchType = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:InitialType[]) => void
    setCurrentPage:(currentPage:number) => void
    setTotalCount:(total:number)=>void
}

export type mapStateType = {
    users:InitialType
    pageSize:number
    totalCount:number
    currentPage:number
}

export type usersContainerType = mapDispatchType & mapStateType

let mapStateToProps = (state:AppStateType):mapStateType=> {
    return{
        users: state.usersPage,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount:(total:number)=>{
            dispatch(setUsersTotalCountAC(total))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)