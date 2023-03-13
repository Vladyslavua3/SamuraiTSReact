import React, {FC} from "react";
import {Header} from "./Header";
import { getAuthUserDataTC, initialStateType, loginOutTC } from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";;
import {compose} from "redux";


type MapDispatchToProps = {
    getAuthUserDataTC:() => void
    loginOutTC:() => void
}

export type headerContainerType = initialStateType & MapDispatchToProps


class HeaderContainer extends React.Component<headerContainerType>{

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header {...this.props}/>
        ;
    }
}


const mapStateToProps = (state:AppStateType):initialStateType => {
    return {
        userId:state.auth.userId,
        email:state.auth.email,
        login:state.auth.login,
        isAuth:state.auth.isAuth
    }
}


export default compose<FC>(connect(mapStateToProps,{getAuthUserDataTC,loginOutTC}))(HeaderContainer)