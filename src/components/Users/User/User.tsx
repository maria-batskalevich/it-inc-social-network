import {UserType} from "../../../api/api";
import React from "react";
import {NavLink} from "react-router-dom";
import userAvatar from "../../../assets/images/user.png";
import s from "../User/User.module.css";

type UserPropsType = {
    user: UserType;
    followingInProgress: Array<number>;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
};

export const User = React.memo(
    ({ user, followingInProgress, follow, unfollow }: UserPropsType) => {
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
                    disabled={followingInProgress.some((id) => id === user.id)}
                    onClick={() => unfollow(user.id)}
                >
                    Unfollow
                </button>
            ) : (
                <button
                    style={{ cursor: "pointer" }}
                    disabled={followingInProgress.some((id) => id === user.id)}
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