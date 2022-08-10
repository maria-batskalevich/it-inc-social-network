import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import s from "./Users.module.css";
import {
    getUsers,
    setCurrentPage, setFollow,
    setTotalCount,
    setUnfollow,
    setUsers,
    toggleIsFetching, UserType
} from "../../../redux/usersReducer";
import {
    getCurrentPage,
    getIsFetching, getIsFollowFetching,
    getPagesSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../../redux/selectors/userSelectors";
import {AppStateTypes} from "../../../redux/store";

type StateType = {
    imagesBg: Array<string>
}

export type ProfilePageType = {
    title?: string
    className?: string
}

class UsersAPI extends React.Component<UsersPropsType & ProfilePageType, StateType> {

    constructor(props: UsersPropsType & ProfilePageType) {
        super(props);
        this.state = {imagesBg: []}
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize)
    }

    setCurrentPage = (currentPage: number) => {
        if (currentPage === this.props.currentPage) return
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        this.props.getUsers(currentPage, this.props.pagesSize)
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const pagesRender = pages.filter(p => p < this.props.currentPage + 4
            && p > this.props.currentPage - 4).map( p => {
            return <span key={p}
                         className={p === this.props.currentPage
                             ? `${s.page} ${s.currentPage}`
                             : `${s.page}`}
                         onClick={() => this.setCurrentPage(p)}
            >&#160;{p}&#160;</span>
        })

        return <Users users={this.props.users}
                      title={this.props.title}
                      className={this.props.className}
                      isFetching={this.props.isFetching}
                      pagesCount={pagesCount}
                      currentPage={this.props.currentPage}
                      imagesBg={this.state.imagesBg}
                      pagesRender={pagesRender}
                      setCurrentPage={this.setCurrentPage}
                      onSetUsers={this.props.setUsers}
                      setFollow={this.props.setFollow}
                      setUnfollow={this.props.setUnfollow}
                      toggleIsFetching={this.props.toggleIsFetching}
                      isFollowFetching={this.props.isFollowFetching}
        />
    }
}

export type MapStateToPropsType = {
    users: UserType[]
    isFollowFetching: number[]
    pagesSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (pagesCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        isFollowFetching: getIsFollowFetching(state),
        pagesSize: getPagesSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
    }
}

export default connect(mapStateToProps, {
    setFollow, setUnfollow, setUsers, getUsers, setCurrentPage, setTotalCount, toggleIsFetching
} as MapDispatchToPropsType)(UsersAPI)