import { getAuthUserDataTC } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

type SetInitializerAT = {
  type: "SET_INITIALIZED"
  initialized: boolean
}

export type UsersReducerAT = SetInitializerAT
export type InitialStateOfAppType = {
  initialized: boolean
}

let initialState = {
  initialized: false
};
export const appReducer = (state: InitialStateOfAppType = initialState, action: UsersReducerAT): InitialStateOfAppType => {
  switch (action.type) {
    case "SET_INITIALIZED":
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const setInitializedSuccessAC = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserDataTC());

  promise.then(() => {
    dispatch(setInitializedSuccessAC());
  });
};