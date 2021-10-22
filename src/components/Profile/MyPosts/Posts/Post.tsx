import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";


const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img
                src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faad4255239c9448d6c7bcd%2FBest-Animal-Photos-Contest--Close-Up-Of-baby-monkey%2F960x0.jpg%3Ffit%3Dscale'/>
            <div className={s.item}>{props.postText}</div>

            <div>
                <span>like {props.likesCount}</span>
            </div>

        </div>
    )
};

export default Post