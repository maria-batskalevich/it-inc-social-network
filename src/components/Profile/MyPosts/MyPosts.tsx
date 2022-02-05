import React from "react";
import s from "./MyPosts.module.css";
import AddPostForm, {AddPostFormDataType} from "./AddPostForm/AddPostForm";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";

export const MyPosts = React.memo(
    ({posts, addPost, deletePost}: MyPostsPropsType) => {
    const postsElements = posts.map((post) => (
        <Post
            key={post.id}
            postText={post.postText}
            likesCount={post.likesCount}
            id={post.id}
            deletePost={deletePost}
        />
    ));

    const onPostAdding = (values: AddPostFormDataType) => {
        addPost(values.newPostText);
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
});
