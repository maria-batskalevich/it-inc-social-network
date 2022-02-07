import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatus,
    getUserProfile,
    updateProfilePhoto, updateProfileStatus,
} from "../../redux/profileReducer";
import {ReduxRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {selectAuthUserId, selectIsAuth} from "../../redux/authSelectors";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void;
    getProfileStatus: (userId: any) => void
    updateProfileStatus: (status: string) => void;
    updateProfilePhoto: (photo: File) => void;
};
type ProfilePathParamsType = {
    userId: any;
};
type ProfileClassContainerURLPropsType = RouteComponentProps<ProfilePathParamsType> &
    MapStatePropsType & MapDispatchPropsType;

class ProfileClassContainer extends React.PureComponent<ProfileClassContainerURLPropsType> {
    updateUserProfile() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authUserId) {
            userId = this.props.authUserId;
        } else if (!userId && !this.props.authUserId) {
            this.props.history.push("/login"); // program redirect - not via JSX !
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.updateUserProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileClassContainerURLPropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateUserProfile();
        }
    }

    render = () => {
        return (
            <Profile
                isProfileOwner={!this.props.match.params.userId}
                userProfile={this.props.userProfile}
                status={this.props.status}
                updateProfileStatus={this.props.updateProfileStatus}
                updateProfilePhoto={this.props.updateProfilePhoto}/>
        );
    };
}

let mapStateToProps = (state: ReduxRootStateType) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authUserId: selectAuthUserId(state),
    isAuth: selectIsAuth(state),
})

const ProfileContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, unknown, ReduxRootStateType>
    (mapStateToProps,
        {
            getUserProfile,
            getProfileStatus,
            updateProfileStatus,
            updateProfilePhoto,
        }
        ),
    withRouter,
    withAuthRedirect
)(ProfileClassContainer)
export default ProfileContainer;
