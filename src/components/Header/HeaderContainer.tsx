import React, {FC} from "react";
import {Header} from "./Header";
import {initialStateType, setAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import axios from "axios";
import {compose} from "redux";


type MapDispatchToProps = {
    setAuthUserData:(userId: number,
    email: string,
    login: string) => void
}

type headerContainerType = initialStateType & MapDispatchToProps


class HeaderContainer extends React.Component<headerContainerType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(res => {
                if(res.data.resultCode === 0){
                    const {id,email,login} = res.data;
                    this.props.setAuthUserData(id,email,login)
                }
        })
    }

    render() {
        return( <div>
            <Header {...this.props}
                    userId={this.props.userId}
                    email={this.props.email}
                    login={this.props.login}
                    isFetching={this.props.isFetching}
            />
        </div>);
    }
}


const mapStateToProps = (state:AppStateType):initialStateType => {
    return {
        userId:state.auth.userId,
        email:state.auth.email,
        login:state.auth.login,
        isFetching:state.auth.isFetching
    }
}
export default compose<FC>(connect(mapStateToProps,{setAuthUserData}))(HeaderContainer)