import React from "react";
import s from "./users.module.css";
import user from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

export const Users = React.memo((props: UsersPropsType) => {
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
                                    onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :

                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.follow(u.id)}}>Follow</button>}

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
})