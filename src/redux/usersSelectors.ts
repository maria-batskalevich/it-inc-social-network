import React from "react";
import {UserType} from "../api/api";
import {ReduxRootStateType} from "./redux-store";


export const selectUsers = (state: ReduxRootStateType): UserType[] => {
    return state.usersPage.users
}

export const selectPageSize = (state: ReduxRootStateType) => {
    return state.usersPage.pageSize
}

export const selectTotalUsersCount = (state: ReduxRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const selectCurrentPage = (state: ReduxRootStateType) => {
    return state.usersPage.currentPage
}

export const selectIsFetching = (state: ReduxRootStateType) => {
    return state.usersPage.isFetching
}

export const selectFollowingInProgress = (state: ReduxRootStateType) => {
    return state.usersPage.followingInProgress
}