import React from "react";
import s from "./MyPosts.module.css";
import {Post, PostPropsType as PostType} from "./Post/Post";
import AddPostForm, {AddPostFormDataType} from "./AddPostForm/AddPostForm";

type MyPostsPropsType = {
    posts: Array<PostType>;
    newPostText: string;
    addPost: (newPostText: string) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map((post) => (
        <Post
            key={post.id}
            postText={post.postText}
            likesCount={post.likesCount}
            id={post.id}/>
    ));

    const onPostAdding = (values: AddPostFormDataType) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={onPostAdding}/>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
