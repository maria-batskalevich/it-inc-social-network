import {usersAPI} from "../api/api";

export type InitialProfileStateType = typeof initialProfileState;
type ProfileReducerActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET-USER-PROFILE'
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
    userId: number;
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
};

export const profileReducer = (
    state: InitialProfileStateType = initialProfileState,
    action: ProfileReducerActionTypes
): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                postText: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.inputPostText,
            };
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile};
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

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}