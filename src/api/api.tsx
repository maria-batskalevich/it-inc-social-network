import axios from "axios";

export enum ResultCode {
    Success = 0,
    Error = 1,
    Captcha = 10,
}

export type UserProfileType = {
    aboutMe: string;
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: UserContactsType;
    photos: PhotosType;
};
export type UserType = {
    id: number;
    name: string;
    status: string | null;
    followed: boolean;
    photos: PhotosType;
};
type ResponseType<D = {}> = {
    resultCode: ResultCode;
    messages: Array<string>;
    data: D;
};
type GetMeDataResponseType = {
    id: number;
    email: string;
    login: string;
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
type GetUsersResponseType = {
    items: Array<UserType>;
    totalCount: number;
    error: string | null;
};

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c8be0b36-3ac5-42a7-89ea-e79ef5d95007"
    }
})

export const usersAPI = {
    getUsers: (currentPage: 1, pageSize: 10) => {
        return instance
            .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(promise => promise.data)
    },
    follow(userId: any) {
        return instance
            .post<ResponseType>(`follow/${userId}`)
            .then((promise) => promise.data)
    },
    unfollow(userId: any) {
        return instance
            .delete<ResponseType>(`follow/${userId}`)
            .then((promise) => promise.data)
    },
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance
            .get<UserProfileType>(`profile/${userId}`)
            .then((promise) => promise.data)
    },
    getStatus(userId: any) {
        return instance
            .get<string>(`profile/status/${userId}`)
            .then((promise) => promise.data)
    },
    updateUserStatus(status: string) {
        return instance
            .put<ResponseType>(`profile/status`, {status: status})
            .then((promise) => promise.data)
    },
}

export const authAPI = {
    me() {
        return instance
            .get<ResponseType<GetMeDataResponseType>>(`auth/me`)
            .then((promise) => promise.data)
    },
    login(email: string, password: string, rememberMe?: boolean) {
        return instance
            .post<ResponseType<{ userId?: number }>>(`auth/login`, {
                email,
                password,
                rememberMe})
            .then((promise) => promise.data)
    },
    logout() {
        return instance
            .delete<ResponseType>(`auth/login`)
            .then((promise) => promise.data)
    },
}





