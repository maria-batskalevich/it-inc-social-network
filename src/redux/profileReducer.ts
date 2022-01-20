import {profileAPI, ResultCode} from "../api/api";
import {Dispatch} from "react";

export type InitialProfileStateType = typeof initialProfileState;
export type ProfileReducerActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>;

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type PostType = {
    id: number;
    postText: string;
    likesCount: number;
};
type UserContactsType = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
};
type PhotosType = {
    small: string;
    large: string;
};

export type UserProfileType = {
    aboutMe: string;
    userId: any;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: UserContactsType;
    photos: PhotosType;
};

const initialProfileState = {
    posts: [] as PostType[],
    newPostText: "",
    userProfile: {} as UserProfileType,
    status: '',
};

export const profileReducer = (
    state: InitialProfileStateType = initialProfileState,
    action: ProfileReducerActionTypes
): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            const updatedState = {...state, posts: [...state.posts]}
            const newPost = {
                id: 4,
                postText: action.newPostText,
                likesCount: 0,
            };
            updatedState.posts.push(newPost);
            updatedState.newPostText = '';
            return updatedState
            };
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile};
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const);
export const setUserProfile = (userProfile: UserProfileType) => ({
    type: SET_USER_PROFILE,
    userProfile,
} as const)
export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status,
} as const)

export const getUserProfile = (userId: any) => (dispatch: Dispatch<any>) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response))
    })
}

export const getUserStatus = (userId: any) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response))
        })
}

export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.resultCode === ResultCode.Success) {
                dispatch(setStatus(status))
            }
        })
}