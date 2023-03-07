import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profileReducer";
import {profilePageType, ProfileType} from "../../Store";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
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



export default compose<FC>(connect(mapStateToProps, {getUserProfileTC}),withRouter,withAuthRedirect)(ProfileContainer)