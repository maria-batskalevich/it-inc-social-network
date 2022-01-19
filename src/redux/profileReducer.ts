import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "react";

export type InitialProfileStateType = typeof initialProfileState;
type ProfileReducerActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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
                postText: state.newPostText,
                likesCount: 0,
            };
            updatedState.posts.push(newPost);
            updatedState.newPostText = '';
            return updatedState
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.inputPostText,
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

export const addPost = () => ({type: ADD_POST} as const);
export const updateNewPostText = (inputPostText: string) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        inputPostText,
    } as const);

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
        dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId: any) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}