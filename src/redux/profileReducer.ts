import {profileAPI, ResultCode} from "../api/api";
import {RootThunkType} from "./redux-store";

export type profileInitialStateType = typeof profileInitialState;
export type ProfileReducerActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserStatus>;

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

const profileInitialState = {
    posts: [
        {id: 1, postText: "hey!!", likesCount: 5},
        {id: 2, postText: "how are u?", likesCount: 3},
    ] as Array<PostType>,
    userProfile: {} as UserProfileType,
    status: '',
};

export const profileReducer = (
    profileState: profileInitialStateType = profileInitialState,
    action: ProfileReducerActionTypes
): profileInitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const updatedState = {...profileState, posts: [...profileState.posts]}
            const newPost = {
                id: updatedState.posts.length + 1,
                postText: action.newPostText,
                likesCount: 0,
            };
            return {...updatedState, posts: [newPost, ...updatedState.posts]}
        }
        case SET_USER_PROFILE: {
            return {...profileState, userProfile: action.userProfile};
        }
        case SET_STATUS: {
            return {
                ...profileState,
                status: action.status
            }
        }
        case "DELETE_POST": {
            return {
                ...profileState,
                posts: profileState.posts.filter((post) => post.id !== action.postID),
            };
        }
        default:
            return profileState;
    }
};

export const addPost = (newPostText: string) =>
    ({
        type: ADD_POST, newPostText
    } as const);
export const deletePost = (postID: number) =>
    ({
        type: "DELETE_POST",
        postID,
    } as const);
export const setUserProfile = (userProfile: UserProfileType) => ({
    type: SET_USER_PROFILE,
    userProfile,
} as const)
export const setUserStatus = (status: string) => ({
    type: SET_STATUS,
    status,
} as const)

export const getUserProfile = (userID: number): RootThunkType => async (
    dispatch
) => {
    try {
        const res = await profileAPI.getProfile(userID);
        dispatch(setUserProfile(res));
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
};
export const getUserStatus = (userID: number): RootThunkType => async (
    dispatch
) => {
    try {
        const res = await profileAPI.getStatus(userID);
        dispatch(setUserStatus(res));
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
};
export const updateUserStatus = (status: string): RootThunkType => async (
    dispatch
) => {
    try {
        const res = await profileAPI.updateUserStatus(status);
        if (res.resultCode === ResultCode.Success) {
            dispatch(setUserStatus(status));
        }
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
};