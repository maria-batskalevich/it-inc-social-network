import {RootThunkType} from "./store";
import {profileAPI} from "../api/API";
import myAvatar from '../assets/images/users/myAvatarLarge.jpg'

export type ProfilePageTypes = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    isFetching: boolean
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType ={
    small: string
    large: string
}

export type SetProfileACType = ReturnType<typeof setProfileAC>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export type savePhotoSuccessACType = ReturnType<typeof savePhotoSuccess>

export type DialogsActionsRootType = SetProfileACType | ToggleIsFetchingACType | savePhotoSuccessACType

const initialState: ProfilePageTypes = {
    userId: 0,
    aboutMe: '',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    photos: {
        small: myAvatar,
        large: myAvatar
    },
    isFetching: false
}

function profileReducer(state: ProfilePageTypes = initialState, action: DialogsActionsRootType): ProfilePageTypes {
    switch (action.type) {
        case 'SET-PROFILE':
            return action.data
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.value}
        case "SAVE-PHOTO-SUCCESS":
            return {...state, photos: action.photos}
        default:
            return state
    }
}

export const setProfileAC = (data: ProfilePageTypes) => { return {type: 'SET-PROFILE', data} as const }
export const toggleIsFetchingAC = (value: boolean) => { return {type: 'TOGGLE-IS-FETCHING', value} as const }
export const savePhotoSuccess = (photos: any) => ({type: 'SAVE-PHOTO-SUCCESS', photos} as const)

export const getProfile = (userID: number): RootThunkType => async dispatch => {
    dispatch(toggleIsFetchingAC(true))
    const profile = await profileAPI.getProfile(+userID)
    dispatch(setProfileAC(profile))
    dispatch(toggleIsFetchingAC(false))
}
export const savePhoto = (file: any): RootThunkType => async dispatch => {
    debugger
    const res = await profileAPI.setPhoto(file)
    if (res.status === 200) {
        dispatch(savePhotoSuccess(res.data.photos))
    }
}

export default profileReducer