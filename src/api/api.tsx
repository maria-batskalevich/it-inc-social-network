import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c8be0b36-3ac5-42a7-89ea-e79ef5d95007"
    }
})

export const usersAPI = {
    gerUsers: (currentPage: 1, pageSize: 10) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(promise => promise.data)
    },
    follow(userId: number) {
        return instance
            .post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
    },
    getProfile(userID: string) {
        return instance
            .get(`profile/${userID}`);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}





