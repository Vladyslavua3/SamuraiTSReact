import {AppStateType} from "../reduxStore";
import { createSelector } from "reselect";


const getUser = (state:AppStateType) => {
  return state.usersPage
}

export const getUserSuper = createSelector(getUser,(users)=>{
  return users.users.filter(u => true)
})

export const getUsersPage = (state: AppStateType) => {
  return state.usersPage
}
export const getUsersPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}
export const getIsFollowing = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}
