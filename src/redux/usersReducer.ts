import {ActionTypes} from "./redux-store";

export type InitialUsersStateType = typeof initialUsersState;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UserType = {
    id: number,
    name: string,
    status: string,
    followed: boolean,
    photos: PhotosType,
}

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

};

export const usersReducer = (
    state: InitialUsersStateType = initialUsersState,
    action: ActionTypes) => {
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

        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case 'TOGGLE_IS_FETCHING':
            return{...state, isFetching: action.isFetching}

        default:
            return state;
    }
};

export const follow = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollow= (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);

