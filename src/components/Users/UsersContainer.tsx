import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followActionCreator,
    InitialType, setCurrentPageAC, setIsFetchingAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowActionCreator,
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

export type mapDispatchType = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:InitialType[]) => void
    setCurrentPage:(currentPage:number) => void
    setTotalCount:(total:number)=>void
    setIsFetching:(isFetching:boolean)=>void
}

export type mapStateType = {
    users:InitialType
    pageSize:number
    totalCount:number
    currentPage:number
    isFetching:boolean
}

export type usersContainerType = mapDispatchType & mapStateType

class UsersC extends React.Component<usersContainerType>{

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number)=> {
        this.props.setCurrentPage(+pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }



    render() {
        return<>
            {this.props.isFetching ? <Preloader /> : null}
        <Users follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setUsers={this.props.setUsers}
                      setCurrentPage={this.props.setCurrentPage}
                      setTotalCount={this.props.setTotalCount}
                      users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>

        </>
    }

}

let mapStateToProps = (state:AppStateType):mapStateType=> {
    return{
        users: state.usersPage,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch:Dispatch):mapDispatchType => {
//     return{
//         follow:(userId:number) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow:(userId:number) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers:(users:InitialType[])=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(currentPage:number)=>{
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount:(total:number)=>{
//             dispatch(setUsersTotalCountAC(total))
//         },
//         setIsFetching:(isFetching:boolean)=>{
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

let dispatchToProps = {
    follow: followActionCreator,
    unfollow:unfollowActionCreator,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalCount:setUsersTotalCountAC,
    setIsFetching:setIsFetchingAC
}

export const UsersContainer = connect(mapStateToProps,dispatchToProps)(UsersC)