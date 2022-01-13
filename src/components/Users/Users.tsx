import React from "react";
import s from "./users.module.css";
import user from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (userId: number, followingInProgress: boolean) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.page}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={s.avatar} src={u.photos.small ? u.photos.small : user}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(u.id, true)
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "c8be0b36-3ac5-42a7-89ea-e79ef5d95007"
                                                    }
                                                })
                                            .then(promise => {
                                                if (promise.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(u.id, false)
                                            })
                                    }}>Unfollow</button> :

                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.toggleFollowingProgress(u.id, true)
                                            axios
                                                .post(
                                                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                    {},
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "c8be0b36-3ac5-42a7-89ea-e79ef5d95007"
                                                        }
                                                    })
                                                .then(promise => {
                                                    if (promise.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(u.id, false)
                                                })
                                        }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </div>)
            }
        </div>
    )
}