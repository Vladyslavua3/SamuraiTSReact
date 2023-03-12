import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import { getStatusProfileTC, getUserProfileTC, updateStatusProfileTC } from "../../redux/profileReducer";
import {profilePageType, ProfileType} from "../../Store";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    profile: ProfileType
    status:string
}

type PathParamType = {
    userId:string
}

type MapDispatchType = {
    getUserProfileTC:(userId:string)=>void
    getStatusProfileTC:(userId:string)=>void
    updateStatusProfileTC:(status:string)=>void
}

type ProfileTypeProps = profilePageType & MapDispatchType

type NewProfileTypeProps = ProfileTypeProps & RouteComponentProps<PathParamType> & MapStatePropsType

class ProfileContainer extends React.Component<NewProfileTypeProps>{

    componentDidMount() {
        let userId = this.props.match.params.userId

        if(!userId){
            userId = '27361'
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusProfileTC(userId)

    }

    render() {

        return (
          <div>
              <Profile
                {...this.props}
                postData={this.props.postData}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusProfileTC}
              />
          </div>
        );
    }

}


let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
    }
}



export default compose<FC>(connect(mapStateToProps, {getUserProfileTC,getStatusProfileTC,updateStatusProfileTC}),withRouter,withAuthRedirect)(ProfileContainer)