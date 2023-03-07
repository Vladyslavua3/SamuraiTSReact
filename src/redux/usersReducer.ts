import { Dispatch } from 'redux';

import { followUser, getUsers, unfollowUser } from '../api/api';
import { ActionsType } from '../Store';

export type FollowACType = ReturnType<typeof followActionCreator>;

export type UnFollowACType = ReturnType<typeof unfollowActionCreator>;

export type SetUsersACType = ReturnType<typeof setUsersAC>;

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>;

export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>;

export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>;

export type toggleIsFollowingACType = ReturnType<typeof toggleIsFollowing>;

export const toggleIsFollowing = (isFetching: boolean, userId: number) =>
  ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId,
  } as const);

export const followActionCreator = (userId: number) =>
  ({
    type: 'FOLLOW',
    userId,
  } as const);

export const unfollowActionCreator = (userId: number) =>
  ({
    type: 'UNFOLLOW',
    userId,
  } as const);

export const setUsersAC = (users: any) =>
  ({
    type: 'SET-USERS',
    users,
  } as const);

export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: 'SET-PAGE',
    currentPage,
  } as const);

export const setUsersTotalCountAC = (total: number) =>
  ({
    type: 'SET-TOTAL',
    total,
  } as const);

export const setIsFetchingAC = (isFetching: boolean) =>
  ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching,
  } as const);

export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowing(true, userId));
  followUser(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(followActionCreator(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
  });
};

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
  unfollowUser(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowActionCreator(userId));
    }
  });
};

export const getUsersTC =
  (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    getUsers(currentPage, pageSize).then(data => {
      dispatch(setCurrentPageAC(currentPage));
      dispatch(setIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setUsersTotalCountAC(data.totalCount));
    });
  };

type UsersAxiosType = {
  name: string;
  id: number;
  uniqueUrlName: string;
  photos: {
    small: string;
    large: string;
  };
  status: null | string;
  followed: boolean;
};

export type InitialType = {
  users: Array<UsersAxiosType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

const initialState: InitialType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = ( action: ActionsType, state: InitialType = initialState ): InitialType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case 'SET-USERS': {
      return { ...state, users: action.users };
    }
    case 'SET-PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET-TOTAL': {
      return { ...state, totalUsersCount: action.total < 200 ? action.total : 50 };
    }
    case 'TOGGLE-IS-FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(e => e !== action.userId),
      };
    }
    default:
      return state;
  }
};
