import React, {FC} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {profilePageType, ProfileType} from "../../Store";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    profile: ProfileType
}

type ProfileTypeProps = profilePageType & { setUserProfile:(profile:ProfileType) => void}

class ProfileContainer extends React.Component<ProfileTypeProps>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=>{
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                <Profile postData={this.props.postData}
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

let mapDispatchToProps = {
    setUserProfile
}

export default compose<FC>(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)