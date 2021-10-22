import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>;
    addPost: (postText: string) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
    let postElement = props.posts.map(m => <Post id={m.id} postText={m.postText} likesCount={m.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addNewPost = () => {
        if (newPostElement.current) {
            const postText = newPostElement.current.value;
            props.addPost(postText)
            newPostElement.current.value = "";
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} />
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}