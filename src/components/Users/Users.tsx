import React from "react";
import {UserType} from "../../api/api";
import {User} from "./User/User";
import {Paginator} from "../common/Paginator/Paginator";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>,
    follow: (userId: any) => void
    unfollow: (userId: any) => void
    followingInProgress: Array<number>
}

export const Users = React.memo(
    ({
         totalUsersCount,
         pageSize,
         onPageChanged,
         currentPage,
         users,
         followingInProgress,
         follow,
         unfollow,
     }: UsersPropsType) => {
        return (
            <div>
                <Paginator
                    currentPage={currentPage}
                    onPageChange={onPageChanged}
                    pageSize={pageSize}
                    totalItemsCount={totalUsersCount}
                    portionSize={10}
                />
                {users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                ))}
            </div>
        )
    })

