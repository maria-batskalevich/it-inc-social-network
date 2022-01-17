import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profileReducer";
import {ReduxRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type MapStatePropsType = {
    userProfile: UserProfileType;
    isAuth: boolean
};
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void;
};
type ProfileClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;
type ProfilePathParamsType = {
    userId: string;
};
type ProfileClassContainerURLPropsType = RouteComponentProps<ProfilePathParamsType> &
    ProfileClassContainerPropsType;


class ProfileClassContainer extends React.Component<
    ProfileClassContainerURLPropsType,
    UserProfileType>{

    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }
    render = () => {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
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
    isAuth: state.auth.isAuth

})

export const ProfileContainer =  connect(mapStateToProps,{getUserProfile} )(
    ProfileURLContainer)