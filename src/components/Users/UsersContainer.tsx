import React from "react";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {
    follow, getUsers, setCurrentPage, unfollow
} from "../../redux/usersReducer";
import {UserType} from "../../api/api";
import {
    selectCurrentPage, selectFollowingInProgress,
    selectIsFetching,
    selectPageSize,
    selectTotalUsersCount,
    selectUsers
} from "../../redux/usersSelectors";


type MapStatePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
};
type MapDispatchPropsType = {
    follow: (userId: any) => void;
    unfollow: (userId: any) => void;
    setCurrentPage: (currentPage: number) => void
    getUsers: (pageNumber: number, pageSize: number) => void
};

export type UsersClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersClassContainer extends React.PureComponent <UsersClassContainerPropsType,
    Array<UserType>> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => ({
    users: selectUsers(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state),

}) as MapStatePropsType



const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, unknown, ReduxRootStateType>
(mapStateToProps, {
        follow, unfollow, setCurrentPage, getUsers,
    })(UsersClassContainer)

export default UsersContainer;

