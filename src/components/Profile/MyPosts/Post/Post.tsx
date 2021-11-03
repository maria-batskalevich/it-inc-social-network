import React from "react";
import s from "./Post.module.css";

export type PostPropsType = {
  id: number;
  postText: string;
  likesCount: number;
};

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img
          src={
              "https://png.pngtree.com/png-clipart/20190920/original/pngtree-happy-fox-avatar-illustration-png-image_4677278.jpg"
          }

          alt={"person photo"}
      />
      {props.postText}
      <div>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};
