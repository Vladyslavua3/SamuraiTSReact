import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followActionCreator,
    InitialType, setCurrentPageAC, setIsFetchingAC,
    setUsersAC, setUsersTotalCountAC, toggleIsFollowing,
    unfollowActionCreator,
} from "../../redux/usersReducer";
import React, {ComponentType,FC} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {getUsers} from "../../api/api";

export type mapDispatchType = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:InitialType[]) => void
    setCurrentPage:(currentPage:number) => void
    setTotalCount:(total:number)=>void
    setIsFetching:(isFetching:boolean)=>void
    toggleIsFollowing:(isFetching:boolean,userId:number) => void
}

export type mapStateType = {
    users:InitialType
    pageSize:number
    totalCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:number[]
}

export type usersContainerType = mapDispatchType & mapStateType

class UsersContainer extends React.Component<usersContainerType>{

    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage,this.props.pageSize)
            .then(data =>{
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number)=> {
        this.props.setCurrentPage(+pageNumber)
        this.props.setIsFetching(true)
        getUsers(pageNumber,this.props.pageSize).then(data=>{
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
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
                      onPageChanged={this.onPageChanged}
               followingInProgress={this.props.followingInProgress}
               toggleIsFollowing={this.props.toggleIsFollowing}
        />

        </>
    }

}

let mapStateToProps = (state:AppStateType):mapStateType=> {
    return{
        users: state.usersPage,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

let dispatchToProps:mapDispatchType = {
    follow: followActionCreator,
    unfollow:unfollowActionCreator,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalCount:setUsersTotalCountAC,
    setIsFetching:setIsFetchingAC,
    toggleIsFollowing:toggleIsFollowing
}

export default compose<FC>(
    connect(mapStateToProps,dispatchToProps))(UsersContainer)