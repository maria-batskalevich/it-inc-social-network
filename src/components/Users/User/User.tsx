import {UserType} from "../../../api/API";
import React from "react";
import {NavLink} from "react-router-dom";
import userAvatar from "../../../assets/images/userAvatar.png";
import s from "../User/User.module.css";

type UserPropsType = {
    user: UserType;
    followingInProgress: Array<number>;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    isAuth: boolean;
};

export const User = React.memo(
    ({ user, followingInProgress, follow, unfollow, isAuth }: UserPropsType) => {
        return (
            <div>
        <span>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img
                  className={s.userPhoto}
                  src={user.photos.small ? user.photos.small : userAvatar}
                  alt={"user avatar"}
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
                <button
                    style={{ cursor: "pointer" }}
                    disabled={
                        !isAuth || followingInProgress.some((id) => id === user.id)
                    }
                    onClick={() => unfollow(user.id)}
                >
                    Unfollow
                </button>
            ) : (
                <button
                    style={{ cursor: "pointer" }}
                    disabled={
                        !isAuth || followingInProgress.some((id) => id === user.id)
                    }
                    onClick={() => follow(user.id)}
                >
                    Follow
                </button>
            )}
          </div>
        </span>
                <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </span>
            </div>
        );
    }
);