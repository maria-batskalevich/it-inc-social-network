import axios from "axios";


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
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(promise => promise.data)
    },
    follow(userId: any) {
        return instance
            .post(`follow/` + userId)
    },
    unfollow(userId: any) {
        return instance
            .delete(`follow/` + userId)
    },
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance
            .get(`profile/` + userId);
    },
    getStatus(userId: any) {
        return instance
            .get(`profile/status/` + userId);
    },
    updateUserStatus(status: string) {
        return instance
            .put(`profile/status`, {status: status});
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}





