import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus, UserProfileType} from "../../redux/profileReducer";
import {ReduxRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from 'redux';

type MapStatePropsType = {
    userProfile: UserProfileType;
    status: string

};
type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void;
    getUserStatus: (userId: any) => void
    updateUserStatus: (status: string) => void;
};
type ProfileClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;

type ProfilePathParamsType = {
    userId: string;
};

type ProfileClassContainerURLPropsType = RouteComponentProps<ProfilePathParamsType> &
    ProfileClassContainerPropsType;


class ProfileClassContainer extends React.PureComponent<ProfileClassContainerURLPropsType,
    UserProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render = () => {
        return (
            <div>
                <Profile
                    userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    };
}

let mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)
(ProfileClassContainer)
