import {AppStateType} from "../reduxStore";

export const getUserProfileInfo = (state: AppStateType) => {
  return state.profilePage.profile
}
export const getUserStatus = (state: AppStateType) => {
  return state.profilePage.status
}