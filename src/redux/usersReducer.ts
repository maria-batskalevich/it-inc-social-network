import {ResultCode, usersAPI, UserType} from "../api/API";
import {RootThunkType} from "./redux-store";

export type UsersInitialStateType = typeof usersInitialState;
export type UsersReducerActionTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setFollowingProgress>;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


type PhotosType = {
    small: string,
    large: string,
}
const usersInitialState = {
    users: [] as UserType[],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

export const usersReducer = (
    state = usersInitialState,
    action: UsersReducerActionTypes): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
        case SET_CURRENT_PAGE:
        case SET_TOTAL_USERS_COUNT:
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.payload}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.followingInProgress
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== Number(action.payload.userId))
            }

        default:
            return state;
    }
};

export const followSuccess = (userId: any) => ({
    type: FOLLOW, payload: {
        userId,
    },
} as const);
export const unfollowSuccess = (userId: any) => ({
    type: UNFOLLOW, payload: {
        userId,
    },
} as const);
export const setUsers = (users: UserType[]) => ({
    type: SET_USERS, payload: {
        users,
    },
} as const);
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE, payload: {
        currentPage,
    },
} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {
        totalUsersCount,
    },
} as const);
export const setIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {
        isFetching,
    },
} as const);
export const setFollowingProgress = (userId: any, followingInProgress: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
        userId,
        followingInProgress,
    },
} as const);


export const getUsers = (currentPage: any, pageSize: any): RootThunkType => async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
        const res = await usersAPI.getUsers(currentPage, pageSize);
        if (!res.error) {
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
        } else {
            const errMessage = res.error;
            alert(errMessage);
            console.warn(errMessage);
        }
    } catch (e) {
        console.warn(e);
    }
    dispatch(setIsFetching(false))
}
export const follow = (userId: any): RootThunkType => async (dispatch) => {
    dispatch(setFollowingProgress(userId, true))
    try {
        const res = await usersAPI.follow(userId);
        if (res.resultCode === ResultCode.Success) {
            dispatch(followSuccess(userId));
        } else {
            const errMessage = res.messages[0];
            alert(errMessage);
            console.warn(errMessage);
        }
    } catch (e) {
        console.warn(e);
    }
    dispatch(setFollowingProgress(userId, false));
};

export const unfollow = (userId: any): RootThunkType => async (dispatch) => {
    dispatch(setFollowingProgress(userId, true));
    try {
        const res = await usersAPI.unfollow(userId);
        if (res.resultCode === ResultCode.Success) {
            dispatch(unfollowSuccess(userId));
        } else {
            const errMessage = res.messages[0];
            alert(errMessage);
            console.warn(errMessage);
        }
    } catch (e) {
        console.warn(e);
    }
    dispatch(setFollowingProgress(userId, false));
};

