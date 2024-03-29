import React, {ComponentType} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/reduxStore";
import { getUserAuth } from "../redux/selectors/authSelector";

type MapStatePropsType = {
  isAuth: boolean;
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: getUserAuth(state)
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStatePropsType) => {

    let {isAuth,...restProps} = props

    if (!isAuth) return <Redirect to="/login" />;

    // @ts-ignore
    return <Component  {...restProps as T} />;
  };

  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
}