import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {ReduxRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapStatePropsType = {
    userProfile: UserProfileType;
};
type MapDispatchPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void;
};
type ProfileClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;
type ProfilePathParamsType = {
    userID: string;
};
type ProfileClassContainerURLPropsType = RouteComponentProps<ProfilePathParamsType> &
    ProfileClassContainerPropsType;


class ProfileClassContainer extends React.Component<
    ProfileClassContainerURLPropsType,
    UserProfileType>{

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = "2";
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then((promise) => {
                this.props.setUserProfile(promise.data);
            });
    }
    render = () => {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        );
    };
    }

const ProfileURLContainer = withRouter(ProfileClassContainer);
let mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile,
})

export const ProfileContainer =  connect(mapStateToProps,{setUserProfile} )(
    ProfileURLContainer)