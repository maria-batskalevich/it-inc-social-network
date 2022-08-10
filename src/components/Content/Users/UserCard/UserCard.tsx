import React from 'react'
import s from './UserCard.module.css'
import userAvatar from '../../../../assets/images/users/userAvatar.png'
import userAvatar2 from '../../../../assets/images/users/userAvatar2.png'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../../../redux/usersReducer";

type PropsType = {
    background: string
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
    isFetching: boolean
    isFollowFetching: number[]
}

export default function OneUserCard(props: UserType & PropsType) {
    const onUnfollowHandler = () => {
        props.setUnfollow(props.id)
    }
    const onFollowHandler = () => {
        props.setFollow(props.id)
    }

    const userIconAny = props.id % 3 === 0 ? userAvatar2 : userAvatar
    const userIsFollowFetching = props.isFollowFetching.includes(props.id)

    return (
        <div className={`${s.wrapper} ${props.isFetching && s.opacity}`}>
            <div className={s.card}>
                <div className={s.bgBox}>
                    {props.followed ? <button disabled={userIsFollowFetching} onClick={onUnfollowHandler}
                                              className={s.follow}>Unfollow</button>
                        : <button disabled={userIsFollowFetching} onClick={onFollowHandler}
                                  className={s.follow}>Follow</button>}
                    <img className={s.bgImg} src={props.photos.large ? props.photos.large : props.background}
                         alt="User Background"/>
                </div>
                <div className={s.infoBox}>
                    <div className={s.privet}>
                        <div className={s.imgBox}>
                            <img className={s.userImg} src={props.photos.small ? props.photos.small : userIconAny}
                                 alt="User"/>
                        </div>
                        <div className={s.data}>
                            <NavLink to={`/profile/${props.id}`} className={s.name}>{props.name}</NavLink>
                        </div>
                    </div>
                    {props.status
                        ? <div className={s.statusWrapper}><h5 className={s.status}>{props.status}</h5></div>
                        : <p className={s.noStatus}>thinking...</p>
                    }
                </div>
            </div>
        </div>
    )
}