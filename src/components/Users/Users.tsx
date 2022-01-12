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
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
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
                                <button onClick={() => {
                                    axios
                                        .delete(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "624556bc-2429-44b0-abcc-055e502b56fb"
                                                }
                                            })
                                        .then(promise => {
                                            if (promise.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button> :

                                <button onClick={() => {
                                    axios
                                        .post(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "624556bc-2429-44b0-abcc-055e502b56fb"
                                                }
                                            })
                                        .then(promise => {
                                            if (promise.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
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