import React from 'react'
import s from './Post.module.css'

export type PostPropsType = {
    post: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.wrapper}>
            {/*<div className={s.top}>*/}
                <div><img className={s.avatar} src={"https://png.pngtree.com/png-clipart/20190920/original/pngtree-happy-fox-avatar-illustration-png-image_4677278.jpg"} alt="avatar"/></div>
                <p className={s.post}>{props.post}</p>
                <span className={s.likes}>likes({props.likesCount})</span>
            {/*</div>*/}

        </div>
    )
}
