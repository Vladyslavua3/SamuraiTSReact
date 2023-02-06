import React, {FC} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {profilePageType, ProfileType} from "../../Store";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";
import {RouteComponentProps,withRouter} from "react-router-dom";


type MapStatePropsType = {
    profile: ProfileType
}

type PathParamType = {
    userId:string
}

type ProfileTypeProps = profilePageType & { setUserProfile:(profile:ProfileType) => void}

type NewProfileTypeProps = ProfileTypeProps & RouteComponentProps<PathParamType>

class ProfileContainer extends React.Component<NewProfileTypeProps>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(response=>{
               this.props.setUserProfile(response.data)
            })
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
        profile: state.profilePage.profile
    }
}



export default compose<FC>(connect(mapStateToProps, {setUserProfile}),withRouter)(ProfileContainer)