import { AnyAction, Dispatch } from "redux";

import { headerApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

export type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type setUserDataACType = ReturnType<typeof setAuthUserData>;

const initialState: initialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state:initialStateType = initialState,action:setUserDataACType) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = ( userId: number | null, email: string | null, login: string | null) =>
  ({
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
    },
  } as const);

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
  headerApi().then(res => {
    if (res.resultCode === 0) {
      const { id, email, login } = res.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};
