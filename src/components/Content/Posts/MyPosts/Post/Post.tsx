import React from 'react'
import s from './Post.module.css'
import maria2 from '../../../../../assets/images/users/maria2.jpg'


export type PostPropsType = {
    post: string
    likesCount: number
}

export function Post(props: PostPropsType) {

    return (
        <div className={s.wrapper}>
                <div><img className={s.avatar} src={maria2} alt="avatar"/></div>
                <p className={s.post}>{props.post}</p>
                <span className={s.likes}>likes({props.likesCount})</span>
        </div>
    )
}
