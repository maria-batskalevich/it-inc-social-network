import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {LeftSide} from "../LeftSide/LeftSide";
import AddPostFormContainer from "./AddPostForm/AddPostFormContainer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

function Posts() {
    return (
        <div className={`wrapperWithWidgets`}>
            <LeftSide/>
            <div className={`innerCenter`}>
                <div className={`innerWrapper`}>
                    <AddPostFormContainer/>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    )
}

export default withAuthRedirect(Posts)