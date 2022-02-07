import {profileAPI, ResultCode} from "../api/API";
import {RootThunkType} from "./redux-store";

export type profileInitialStateType = typeof profileInitialState;
export type ProfileReducerActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof getProfileStatus>
    | ReturnType<typeof setProfilePhoto>

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
                postText: action.payload.newPostText,
                likesCount: 0,
            };
            return {...updatedState, posts: [newPost, ...updatedState.posts]}
        }
        case SET_USER_PROFILE:
        case 'SET_PROFILE_STATUS' :{
            return {...profileState, ...action.payload};
        }
        case "DELETE_POST": {
            return {
                ...profileState,
                posts: profileState.posts.filter(
                    (post) => post.id !== action.payload.postID
                ),
            };
        }
        case "SET_PROFILE_PHOTO":
            return {
                ...profileState,
                userProfile: {
                    ...profileState.userProfile,
                    photos: action.payload.photos,
                },
            };
        default:
            return profileState;
    }
};

export const addPost = (newPostText: string) =>
    ({
        type: ADD_POST,
        payload: {
            newPostText,
        },
    } as const);
export const deletePost = (postID: number) =>
    ({
        type: "DELETE_POST",
        payload: {
            postID,
        },
    } as const);
export const setUserProfile = (userProfile: UserProfileType) => ({
    type: SET_USER_PROFILE,
    payload: {
        userProfile,
    },
} as const)

export const getProfileStatus = (status: string) =>
    ({
        type: "SET_PROFILE_STATUS",
        payload: {
            status,
        },
    } as const);
export const setProfilePhoto = (photos: PhotosType) =>
    ({
        type: "SET_PROFILE_PHOTO",
        payload: {
            photos,
        },
    } as const);

export const getUserProfile = (userID: number): RootThunkType => async (
    dispatch
) => {
    try {
        const res = await profileAPI.getProfile(userID);
        dispatch(setUserProfile(res));
    } catch (e) {
        console.warn(e);
    }
};
export const updateProfileStatus = (status: string): RootThunkType => async (
    dispatch
) => {
    try {
        const res = await profileAPI.updateUserStatus(status);
        if (res.resultCode === ResultCode.Success) {
            dispatch(getProfileStatus(status));
        } else {
            const errMessage = res.messages[0];
            alert(errMessage);
            console.warn(errMessage);
        }
    } catch (e) {
        console.warn(e);
    }
};
export const updateProfilePhoto = (photo: File): RootThunkType => async (
    dispatch
) => {
    try {
        const res = await profileAPI.updatePhoto(photo);
        if (res.resultCode === ResultCode.Success) {
            dispatch(setProfilePhoto(res.data.photos));
        } else {
            const errMessage = res.messages[0];
            alert(errMessage);
            console.warn(errMessage);
        }
    } catch (e) {
        console.warn(e);
    }
};