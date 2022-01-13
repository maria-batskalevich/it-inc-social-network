import axios from "axios";
import {follow, unfollow} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c8be0b36-3ac5-42a7-89ea-e79ef5d95007"
    }
})

export const usersAPI = {
    gerUsers: (currentPage: any, pageSize: any) => {
        return instance
            .get( `users?page=${currentPage}&count=${pageSize}`)
            .then(promise => promise.data)
    }
}



export const unfollowUser = (id: any) => {
    return instance
        .delete(`follow/${id}`)
        .then(promise => {
            if (promise.data.resultCode === 0) {
                unfollow(id)
            }
        })
}

export const followUser = (id: any) => {
    return instance
        .post(
            `follow/${id}`,
            {})
        .then(promise => {
            if (promise.data.resultCode === 0) {
                follow(id)
            }
        })
}