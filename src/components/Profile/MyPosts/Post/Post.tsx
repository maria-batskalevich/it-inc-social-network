import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../redux/profileReducer";

type PostPropsType = PostType & {
    deletePost: (postId: number) => void;
};

export const Post = React.memo(
    ({deletePost, postText, likesCount, id}: PostPropsType) => {
        const onClickHandler = () => deletePost(id);
        return (
            <div className={s.item}>
                <img
                    src={
                        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-happy-fox-avatar-illustration-png-image_4677278.jpg"
                    }

                    alt={"person photo"}
                />
                {postText}
                <div>
                    <span>{likesCount}</span>
                </div>
                <button onClick={onClickHandler} className={s.btn}>
                    Delete post
                </button>
            </div>
        );
    }
);
