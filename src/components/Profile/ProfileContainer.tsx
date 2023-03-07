import React, {FC} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileTC, setUserProfile} from "../../redux/profileReducer";
import {profilePageType, ProfileType} from "../../Store";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    profile: ProfileType
    isAuth:boolean
}

type PathParamType = {
    userId:string
}

type ProfileTypeProps = profilePageType & { getUserProfileTC:(userId:string)=>void}

type NewProfileTypeProps = ProfileTypeProps & RouteComponentProps<PathParamType> & MapStatePropsType

class ProfileContainer extends React.Component<NewProfileTypeProps>{

    componentDidMount() {
        this.props.getUserProfileTC(this.props.match.params.userId)
    }


    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    postData={this.props.postData}
                    newPostText={this.props.newPostText}
                    profile={this.props.profile}/>
            </div>
        )
    }

}


let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}



export default withAuthRedirect(compose<FC>(connect(mapStateToProps, {getUserProfileTC}),withRouter)(ProfileContainer))