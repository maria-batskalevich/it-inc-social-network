import {ResultCode, usersAPI, UserType} from "../api/api";
import {Dispatch} from "react";
import {AppThunkType} from "./redux-store";

export type InitialUsersStateType = typeof initialUsersState;
export type UsersReducerActionTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

// export type UserType = {
//     id: number,
//     name: string,
//     status: string,
//     followed: boolean,
//     photos: PhotosType,
// }

type PhotosType = {
    small: string,
    large: string,
}
const initialUsersState = {
    users: [] as UserType[],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

export const usersReducer = (
    state: InitialUsersStateType = initialUsersState,
    action: UsersReducerActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== Number(action.userId))
            }

        default:
            return state;
    }
};

export const followSuccess = (userId: any) => ({type: FOLLOW, userId} as const);
export const unfollowSuccess = (userId: any) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingProgress = (userId: any, followingInProgress: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    userId,
    followingInProgress
} as const);


export const getUsers = (currentPage: any, pageSize: any):AppThunkType => (dispatch: Dispatch<any>) => {
        dispatch(toggleIsFetching(true));
        usersAPI
            .getUsers(currentPage, pageSize)
            .then(data => {
                if(!data.error) {
                    dispatch(toggleIsFetching(false))
                    dispatch(setUsers(data.items));
                    dispatch(setTotalUsersCount(data.totalCount));
                }

            });
}
export const follow = (userId: any): AppThunkType => (dispatch: Dispatch<any>) => {
        dispatch(toggleFollowingProgress(userId, true))
        usersAPI.follow(userId)
            .then(promise => {
                if (promise.resultCode === ResultCode.Success) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(userId, false))
            })
}

export const unfollow = (userId: any): AppThunkType => (dispatch: Dispatch<any>) => {
        dispatch(toggleFollowingProgress(userId, true))
        usersAPI.unfollow(userId)
            .then(promise => {
                if (promise.resultCode === ResultCode.Success) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(userId, false))
            })
}


